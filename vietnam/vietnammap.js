/* =========================================================
   MAP-ZOOM.JS
   Chức năng:
   - Zoom in / Zoom out
   - Zoom bằng con lăn chuột
   - Kéo bản đồ bằng chuột hoặc cảm ứng
   - Chọn tỉnh/thành để phóng to và hiển thị thông tin
   - Tìm kiếm tỉnh/thành, gợi ý và điều hướng bằng bàn phím
   - Đặt lại bản đồ
   ========================================================= */

(() => {
    "use strict";

    // =====================================================
    // 1. CẤU HÌNH
    // =====================================================

    const CONFIG = {
        minScale: 1,
        maxScale: 5,
        zoomStep: 1.2,
        provinceScale: {
            desktop: 2,
            mobile: 2.3
        },
        dragThreshold: 5,
        wheelZoom: true,
        enableKeyboardNavigation: true
    };

    // =====================================================
    // 2. DỮ LIỆU TỈNH / THÀNH
    // =====================================================
    // Tên tỉnh được lấy theo thứ tự ưu tiên:
    // 1. Dữ liệu trong PROVINCES
    // 2. data-name / data-province-name của SVG
    // 3. aria-label hoặc title của SVG
    // 4. Nội dung thẻ <title> bên trong path
    //
    // Bạn có thể bổ sung mô tả và đường dẫn trang riêng
    // cho từng tỉnh trong object này.

    // =====================================================
    // 3. LẤY PHẦN TỬ HTML
    // =====================================================

    const mapObject = document.getElementById("map");
    const wrapper = document.getElementById("mapWrapper");
    const searchInput = document.getElementById("searchInput");
    const infoPanel = document.getElementById("infoPanel");
    const provinceInfo = document.getElementById("provinceInfo");
    const closePanel = document.getElementById("closePanel");

    const zoomInButton = document.getElementById("zoomIn");
    const zoomOutButton = document.getElementById("zoomOut");
    const resetButton = document.getElementById("resetZoom");

    if (!mapObject || !wrapper) {
        console.error(
            "[MapZoom] Không tìm thấy #map hoặc #mapWrapper."
        );
        return;
    }

    // =====================================================
    // 4. TRẠNG THÁI BẢN ĐỒ
    // =====================================================

    let svgDocument = null;
    let svgElement = null;

    let transformGroup = null;

    let renderedScale = 1;
    let renderedTranslateX = 0;
    let renderedTranslateY = 0;

    let animationFrameId = null;

    let scale = 1;
    let translateX = 0;
    let translateY = 0;

    let activeProvinceId = null;
    let highlightedPath = null;

    let isDragging = false;
    let hasDragged = false;
    let pointerId = null;

    let pointerStartX = 0;
    let pointerStartY = 0;
    let translateStartX = 0;
    let translateStartY = 0;

    let suppressNextClick = false;
    let suppressClickTimer = null;

    let suggestionContainer = null;
    let activeSuggestionIndex = -1;
    let filteredProvinces = [];

    // =====================================================
    // 5. HÀM TIỆN ÍCH
    // =====================================================


    function isMobile() {
        return window.matchMedia("(max-width: 767px)").matches;
    }

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function removeAccents(value = "") {
        return String(value)
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D")
            .toLowerCase()
            .trim();
    }

    function escapeHTML(value = "") {
        return String(value).replace(/[&<>"']/g, character => {
            const entities = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            };

            return entities[character];
        });
    }

    function getProvinceName(path) {
        if (!path) return "";

        const id = path.id;
        const data = PROVINCES[id];

        if (data?.name) {
            return data.name;
        }

        const nameAttribute =
            path.getAttribute("data-province-name") ||
            path.getAttribute("data-name") ||
            path.getAttribute("aria-label") ||
            path.getAttribute("title");

        if (nameAttribute) {
            return nameAttribute.trim();
        }

        const title = path.querySelector("title");

        if (title?.textContent?.trim()) {
            return title.textContent.trim();
        }

        return id || "Tỉnh/thành chưa xác định";
    }

    function showProvinceLabel(provinceId) {
        if (!svgDocument) return;

        const labels = svgDocument.querySelectorAll(
            "#province-labels .province-label"
        );

        labels.forEach((label) => {
            const isSelected =
                label.getAttribute("data-province-id") === provinceId;

            // Chưa chọn tỉnh: hiện tất cả tên.
            // Đã chọn tỉnh: chỉ hiện tên tỉnh được chọn.
            label.setAttribute(
                "display",
                provinceId === null || isSelected ? "inline" : "none"
            );
        });
    }
    function addProvinceLabels() {
        if (!svgDocument || !svgElement) return;

        // Tránh tạo nhãn trùng lặp khi khởi tạo lại bản đồ
        svgDocument.getElementById("province-labels")?.remove();

        const labelGroup = svgDocument.createElementNS(
            "http://www.w3.org/2000/svg",
            "g"
        );

        labelGroup.setAttribute("id", "province-labels");
        labelGroup.setAttribute("pointer-events", "none");

        getProvincePaths().forEach((path) => {
            const provinceId = path.id;
            const province = PROVINCES[provinceId];

            if (!province) return;

            const name = province.name;
            const bounds = path.getBBox();

            if (!bounds.width || !bounds.height) return;

            const label = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "text"
            );



            // Thiết lập vị trí và nội dung tên tỉnh
            label.setAttribute("class", "province-label");
            label.setAttribute("data-province-id", provinceId);
            label.setAttribute("x", bounds.x + bounds.width / 2);
            label.setAttribute("y", bounds.y + bounds.height / 2);
            label.setAttribute("text-anchor", "middle");
            label.setAttribute("dominant-baseline", "central");

            // Thiết lập kiểu chữ
            label.setAttribute("font-size", "12");
            label.setAttribute("font-family", "Arial, sans-serif");
            label.setAttribute("font-weight", "600");
            label.setAttribute("fill", "#334155");

            // Tạo viền trắng để chữ dễ đọc trên bản đồ
            label.setAttribute("stroke", "#ffffff");
            label.setAttribute("stroke-width", "2.5");
            label.setAttribute("paint-order", "stroke");
            label.setAttribute("stroke-linejoin", "round");

            // Gán tên tỉnh
            label.textContent = name;
            // Thêm nhãn vào nhóm
            labelGroup.appendChild(label);
        });

        // Đặt nhãn sau các hình tỉnh để chữ nằm phía trên bản đồ
        transformGroup.appendChild(labelGroup);
    }

    function getProvinceData(id, path = null) {
        const data = PROVINCES[id] || {};

        return {
            id,
            name: data.name || getProvinceName(path),
            desc: data.desc ||
                "Khám phá thông tin, văn hóa và các địa điểm nổi bật của địa phương.",
            href: data.href || `pages/tinh-thanh/template.html?province=${encodeURIComponent(id)}`
        };
    }

    function getProvincePaths() {
        if (!svgElement) return [];

        return Array.from(
            svgElement.querySelectorAll("path[id]")
        ).filter(path => {
            const id = path.id;

            return (
                /^VN\d+$/i.test(id) ||
                Boolean(PROVINCES[id])
            );
        });
    }

    // =====================================================
    // 6. KHỞI TẠO SVG
    // =====================================================

    mapObject.addEventListener("load", initializeMap);

    // Trường hợp object đã tải xong trước khi gắn sự kiện.
    if (mapObject.contentDocument?.documentElement?.tagName.toLowerCase() === "svg") {
        initializeMap();
    }

    function createTransformGroup() {
        if (!svgElement) return null;

        // Không tạo nhóm mới nếu đã có
        const existingGroup = svgDocument.getElementById(
            "map-transform-group"
        );

        if (existingGroup) {
            transformGroup = existingGroup;
            return transformGroup;
        }

        transformGroup = svgDocument.createElementNS(
            "http://www.w3.org/2000/svg",
            "g"
        );

        transformGroup.setAttribute("id", "map-transform-group");

        // Giữ các phần định nghĩa và metadata bên ngoài nhóm zoom
        const keepOutside = new Set([
            "defs",
            "style",
            "title",
            "desc",
            "metadata",
            "script"
        ]);

        Array.from(svgElement.children).forEach(child => {
            if (!keepOutside.has(child.tagName.toLowerCase())) {
                transformGroup.appendChild(child);
            }
        });

        svgElement.appendChild(transformGroup);

        return transformGroup;
    }

    function initializeMap() {
        try {
            svgDocument = mapObject.contentDocument;
            svgElement = svgDocument.documentElement;

            if (!svgElement || svgElement.tagName.toLowerCase() !== "svg") {
                console.error(
                    "[MapZoom] Không đọc được SVG. Hãy kiểm tra đường dẫn assets/images/bando.svg."
                );
                return;
            }

            createTransformGroup();
            addProvinceLabels();
            setupProvinceInteractions();
            setupMapControls();
            setupSearch();
            setupPanel();
            setupPanAndZoom();

            applyTransform(false);
            updateCursor();

            console.info("[MapZoom] Bản đồ đã sẵn sàng.");
        } catch (error) {
            console.error(
                "[MapZoom] Không thể khởi tạo bản đồ:",
                error
            );
        }
    }

    // =====================================================
    // 7. CHỌN VÀ TÔ SÁNG TỈNH
    // =====================================================

    function setupProvinceInteractions() {
        const paths = getProvincePaths();

        paths.forEach(path => {
            path.style.cursor = "pointer";

            path.addEventListener("click", event => {
                if (suppressNextClick) {
                    event.preventDefault();
                    event.stopPropagation();
                    return;
                }

                selectProvince(path.id);
            });

            path.addEventListener("mouseenter", () => {
                if (path !== highlightedPath) {
                    path.style.filter = "brightness(1.08)";
                }
            });

            path.addEventListener("mouseleave", () => {
                if (path !== highlightedPath) {
                    path.style.filter = "";
                }
            });
        });
    }

    function highlightProvince(path) {
        if (highlightedPath) {
            highlightedPath.style.fill =
                highlightedPath.dataset.originalFill || "";

            highlightedPath.style.stroke =
                highlightedPath.dataset.originalStroke || "";

            highlightedPath.style.strokeWidth =
                highlightedPath.dataset.originalStrokeWidth || "";

            highlightedPath.style.filter = "";
            highlightedPath.style.paintOrder = "";
        }

        highlightedPath = path;

        if (!path) return;

        if (path.dataset.originalFill === undefined) {
            path.dataset.originalFill = path.style.fill;
            path.dataset.originalStroke = path.style.stroke;
            path.dataset.originalStrokeWidth = path.style.strokeWidth;
        }

        path.style.fill = "#FACC15";
        path.style.stroke = "#B45309";
        path.style.strokeWidth = "2";
        path.style.paintOrder = "stroke";
        path.style.filter = "drop-shadow(0 0 3px rgba(0,0,0,0.25))";
    }

    function selectProvince(id) {
        if (!svgElement) return;

        const path = svgDocument.getElementById(id);

        if (!path) {
            console.warn(`[MapZoom] Không tìm thấy tỉnh có ID "${id}".`);
            return;
        }

        activeProvinceId = id;
        showProvinceLabel(id);

        highlightProvince(path);
        showProvinceLabel(id);
        showInfo(id, path);
        zoomToProvince(path);
    }

    // =====================================================
    // 8. HIỂN THỊ THÔNG TIN TỈNH
    // =====================================================


    function showInfo(id, path = null) {
        if (!infoPanel || !provinceInfo) return;

        const province = getProvinceData(
            id,
            path || svgDocument?.getElementById(id)
        );

        provinceInfo.innerHTML = `
        <div class="space-y-5">

            <!-- Tên tỉnh/thành -->
            <div>
                <h3 class="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    ${escapeHTML(province.name)}
                </h3>

                <div class="mt-3 h-1 w-12 rounded-full bg-teal-600"></div>
            </div>

            <!-- Mô tả địa phương -->
            <p class="text-sm leading-7 text-slate-600 sm:text-base">
                ${escapeHTML(province.desc)}
            </p>

            <!-- Nút khám phá -->
            <a
                href="${escapeHTML(province.href)}"
                class="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
            >
                Khám phá chi tiết

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h14m-7-7 7 7-7 7"
                    />
                </svg>
            </a>

        </div>
    `;

        infoPanel.classList.add("active");
        infoPanel.setAttribute("aria-live", "polite");
    }


    function hideInfo() {
        if (!infoPanel) return;

        infoPanel.classList.remove("active");
        infoPanel.style.display = "none";
    }

    function setupPanel() {
        if (!closePanel) return;

        closePanel.addEventListener("click", () => {
            resetMap();

            if (infoPanel) {
                infoPanel.style.display = "block";
                infoPanel.classList.add("active");
            }

            if (searchInput) {
                searchInput.value = "";
            }
        });
    }

    // =====================================================
    // 9. PHÓNG TO VÀ DI CHUYỂN
    // =====================================================
    // =====================================================
    // GIỚI HẠN VÙNG DI CHUYỂN CỦA BẢN ĐỒ
    // =====================================================

    function constrainTranslation() {
        if (!svgElement || !wrapper || !mapObject) return;

        const viewBox = svgElement.viewBox.baseVal;
        const mapRect = mapObject.getBoundingClientRect();
        const wrapperRect = wrapper.getBoundingClientRect();

        if (
            !viewBox.width ||
            !viewBox.height ||
            !mapRect.width ||
            !mapRect.height ||
            !wrapperRect.width ||
            !wrapperRect.height
        ) {
            return;
        }

        // Tỷ lệ SVG ban đầu bên trong object.
        const fitScale = Math.min(
            mapRect.width / viewBox.width,
            mapRect.height / viewBox.height
        );

        if (!fitScale) return;

        // Khoảng trống do SVG không cùng tỷ lệ với khung hiển thị.
        const offsetX =
            (mapRect.width - viewBox.width * fitScale) / 2;

        const offsetY =
            (mapRect.height - viewBox.height * fitScale) / 2;

        // Vị trí SVG tương đối với khung bản đồ.
        const contentLeft =
            mapRect.left - wrapperRect.left + offsetX;

        const contentTop =
            mapRect.top - wrapperRect.top + offsetY;

        // Kích thước SVG sau khi zoom.
        const contentWidth =
            viewBox.width * fitScale * scale;

        const contentHeight =
            viewBox.height * fitScale * scale;

        const viewportWidth = wrapperRect.width;
        const viewportHeight = wrapperRect.height;

        // ---------- Giới hạn chiều ngang ----------
        if (contentWidth <= viewportWidth) {
            // SVG chưa phủ kín khung: giữ bản đồ ở chính giữa.
            translateX =
                (viewportWidth - 2 * contentLeft - contentWidth) / 2;
        } else {
            // SVG phủ kín khung: không cho kéo lộ khoảng trống.
            const padding = 40; // Cho phép di chuyển rộng thêm 40px

            const minX = viewportWidth - contentLeft - contentWidth - padding;
            const maxX = -contentLeft + padding;

            translateX = clamp(translateX, minX, maxX);
        }

        // ---------- Giới hạn chiều dọc ----------
        if (contentHeight <= viewportHeight) {
            // SVG chưa phủ kín khung: giữ bản đồ ở chính giữa.
            translateY =
                (viewportHeight - 2 * contentTop - contentHeight) / 2;
        } else {
            // SVG phủ kín khung: không cho kéo lộ khoảng trống.
            const padding = 40; // Cho phép di chuyển rộng thêm 40px

            const minY = viewportHeight - contentTop - contentHeight - padding;
            const maxY = -contentTop + padding;

            translateY = clamp(translateY, minY, maxY);
        }
    }

    function applyTransform(animate = true) {
        if (!svgElement || !transformGroup) return;

        const viewBox = svgElement.viewBox.baseVal;
        const rect = mapObject.getBoundingClientRect();

        if (!viewBox.width || !viewBox.height || !rect.width || !rect.height) {
            return;
        }

        // Quy đổi pixel trên màn hình sang đơn vị tọa độ SVG.
        const fitScale = Math.min(
            rect.width / viewBox.width,
            rect.height / viewBox.height
        );

        if (!fitScale) return;

        // Giới hạn vị trí trước khi áp dụng zoom hoặc di chuyển.
        constrainTranslation();

        if (animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }

        const start = {
            x: renderedTranslateX,
            y: renderedTranslateY,
            scale: renderedScale
        };

        const target = {
            x: translateX,
            y: translateY,
            scale
        };

        function renderFrame(x, y, currentScale) {
            // Quy đổi độ dịch chuyển từ pixel sang đơn vị SVG.
            const svgX =
                x / fitScale + viewBox.x * (1 - currentScale);

            const svgY =
                y / fitScale + viewBox.y * (1 - currentScale);

            // Phép biến đổi SVG thực sự, không scale phần tử HTML.
            transformGroup.setAttribute(
                "transform",
                `translate(${svgX} ${svgY}) scale(${currentScale})`
            );

            renderedTranslateX = x;
            renderedTranslateY = y;
            renderedScale = currentScale;
        }

        if (!animate) {
            renderFrame(target.x, target.y, target.scale);
            updateCursor();
            return;
        }

        const duration = 650;
        const startTime = performance.now();

        function step(now) {
            const progress = Math.min((now - startTime) / duration, 1);

            // Easing cubic-bezier gần với hiệu ứng ease-out mượt.
            const eased = 1 - Math.pow(1 - progress, 4);

            const x = start.x + (target.x - start.x) * eased;
            const y = start.y + (target.y - start.y) * eased;

            const currentScale =
                start.scale + (target.scale - start.scale) * eased;

            renderFrame(x, y, currentScale);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(step);
            } else {
                animationFrameId = null;
                updateCursor();
            }
        }

        animationFrameId = requestAnimationFrame(step);
    }

    function updateCursor() {
        if (!svgElement) return;

        if (isDragging) {
            svgElement.style.cursor = "grabbing";
        } else if (scale > CONFIG.minScale) {
            svgElement.style.cursor = "grab";
        } else {
            svgElement.style.cursor = "default";
        }
    }

    function getWrapperRect() {
        return wrapper.getBoundingClientRect();
    }

    function zoomAt(clientX, clientY, nextScale) {
        if (!svgElement) return;

        const rect = getWrapperRect();

        const localX = clientX - rect.left;
        const localY = clientY - rect.top;

        const boundedScale = clamp(
            nextScale,
            CONFIG.minScale,
            CONFIG.maxScale
        );

        const ratio = boundedScale / scale;

        translateX = localX - (localX - translateX) * ratio;
        translateY = localY - (localY - translateY) * ratio;

        scale = boundedScale;

        applyTransform();
    }

    function zoomIn() {
        const rect = getWrapperRect();

        zoomAt(
            rect.left + rect.width / 2,
            rect.top + rect.height / 2,
            scale * CONFIG.zoomStep
        );
    }

    function zoomOut() {
        const rect = getWrapperRect();

        zoomAt(
            rect.left + rect.width / 2,
            rect.top + rect.height / 2,
            scale / CONFIG.zoomStep
        );
    }

    function zoomTo(options = {}) {
        const nextScale = clamp(
            Number(options.scale ?? CONFIG.provinceScale.desktop),
            CONFIG.minScale,
            CONFIG.maxScale
        );

        translateX = Number(options.translateX ?? 0);
        translateY = Number(options.translateY ?? 0);
        scale = nextScale;

        applyTransform();
    }

    function zoomToProvince(path) {
        if (!svgElement || !transformGroup || !path || !wrapper || !mapObject) {
            return;
        }

        let bounds;

        try {
            bounds = path.getBBox();
        } catch (error) {
            console.error("[MapZoom] Không lấy được tọa độ tỉnh:", error);
            return;
        }

        if (!bounds.width || !bounds.height) return;

        const viewBox = svgElement.viewBox.baseVal;

        if (!viewBox || !viewBox.width || !viewBox.height) {
            console.error("[MapZoom] SVG không có viewBox hợp lệ.");
            return;
        }

        const mapRect = mapObject.getBoundingClientRect();
        const wrapperRect = wrapper.getBoundingClientRect();

        if (!mapRect.width || !mapRect.height) return;

        // Tỷ lệ hiển thị ban đầu của SVG trong object.
        const fitScale = Math.min(
            mapRect.width / viewBox.width,
            mapRect.height / viewBox.height
        );

        // Căn giữa SVG trong vùng hiển thị.
        const offsetX = (mapRect.width - viewBox.width * fitScale) / 2;
        const offsetY = (mapRect.height - viewBox.height * fitScale) / 2;

        // Tâm tỉnh trong hệ tọa độ SVG.
        const centerX = bounds.x + bounds.width / 2;
        const centerY = bounds.y + bounds.height / 2;

        // Vị trí tâm tỉnh trên màn hình trước khi zoom.
        const provinceX =
            mapRect.left - wrapperRect.left +
            offsetX +
            (centerX - viewBox.x) * fitScale;

        const provinceY =
            mapRect.top - wrapperRect.top +
            offsetY +
            (centerY - viewBox.y) * fitScale;

        const nextScale = clamp(
            isMobile()
                ? CONFIG.provinceScale.mobile
                : CONFIG.provinceScale.desktop,
            CONFIG.minScale,
            CONFIG.maxScale
        );

        // Đưa tâm tỉnh vào chính giữa vùng bản đồ.
        translateX =
            wrapperRect.width / 2 - provinceX -
            (centerX - viewBox.x) * fitScale * (nextScale - 1);

        translateY =
            wrapperRect.height / 2 - provinceY -
            (centerY - viewBox.y) * fitScale * (nextScale - 1);

        scale = nextScale;

        // Zoom bằng nhóm SVG <g>, có animation.
        applyTransform(true);
    }

    // =====================================================
    // 10. RESET BẢN ĐỒ
    // =====================================================

    function resetMap() {
        scale = 1;
        translateX = 0;
        translateY = 0;

        activeProvinceId = null;

        highlightProvince(null);
        hideInfo();
        closeSuggestions();

        if (searchInput) {
            searchInput.value = "";
        }

        applyTransform();
        showProvinceLabel(null);
    }

    // =====================================================
    // 11. NÚT ĐIỀU KHIỂN
    // =====================================================

    function setupMapControls() {
        zoomInButton?.addEventListener("click", zoomIn);
        zoomOutButton?.addEventListener("click", zoomOut);
        resetButton?.addEventListener("click", resetMap);
    }

    // =====================================================
    // 12. ZOOM BẰNG CON LĂN CHUỘT
    // =====================================================

    function setupPanAndZoom() {
        if (!svgElement) return;

        svgElement.addEventListener(
            "wheel",
            event => {
                if (!CONFIG.wheelZoom) return;

                event.preventDefault();

                const factor = event.deltaY < 0
                    ? CONFIG.zoomStep
                    : 1 / CONFIG.zoomStep;

                zoomAt(
                    event.clientX,
                    event.clientY,
                    scale * factor
                );
            },
            { passive: false }
        );

        svgElement.addEventListener(
            "pointerdown",
            onPointerDown
        );

        svgElement.addEventListener(
            "pointermove",
            onPointerMove
        );

        svgElement.addEventListener(
            "pointerup",
            onPointerUp
        );

        svgElement.addEventListener(
            "pointercancel",
            onPointerUp
        );

        svgElement.addEventListener(
            "click",
            event => {
                if (suppressNextClick) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            },
            true
        );

        wrapper.addEventListener("dragstart", event => {
            event.preventDefault();
        });

        // Ngăn thao tác cảm ứng của trình duyệt xung đột với kéo bản đồ.
        svgElement.style.touchAction = "none";
    }

    function onPointerDown(event) {
        if (event.button !== undefined && event.button !== 0) {
            return;
        }

        // Nếu đang zoom, dừng animation và tiếp tục từ vị trí đang hiển thị.
        if (animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;

            scale = renderedScale;
            translateX = renderedTranslateX;
            translateY = renderedTranslateY;
        }

        pointerId = event.pointerId;

        pointerStartX = event.clientX;
        pointerStartY = event.clientY;

        translateStartX = translateX;
        translateStartY = translateY;

        isDragging = true;
        hasDragged = false;

        updateCursor();
    }

    function onPointerMove(event) {
        if (!isDragging || event.pointerId !== pointerId) {
            return;
        }

        const deltaX = event.clientX - pointerStartX;
        const deltaY = event.clientY - pointerStartY;

        if (
            Math.abs(deltaX) > CONFIG.dragThreshold ||
            Math.abs(deltaY) > CONFIG.dragThreshold
        ) {
            hasDragged = true;
        }

        if (!hasDragged) return;

        translateX = translateStartX + deltaX;
        translateY = translateStartY + deltaY;

        applyTransform(false);
    }

    function onPointerUp(event) {
        if (!isDragging || event.pointerId !== pointerId) {
            return;
        }

        if (svgElement) {
            svgElement.style.transition =
                "transform 650ms cubic-bezier(0.22, 1, 0.36, 1)";
        }

        isDragging = false;


        if (hasDragged) {
            suppressNextClick = true;

            if (suppressClickTimer) {
                clearTimeout(suppressClickTimer);
            }

            suppressClickTimer = setTimeout(() => {
                suppressNextClick = false;
            }, 100);
        }

        pointerId = null;
        updateCursor();
    }

    // =====================================================
    // 13. TÌM KIẾM TỈNH / THÀNH
    // =====================================================

    function setupSearch() {
        if (!searchInput) return;

        createSuggestionsContainer();

        searchInput.setAttribute("autocomplete", "off");
        searchInput.setAttribute("aria-autocomplete", "list");

        searchInput.addEventListener("input", () => {
            const keyword = removeAccents(searchInput.value);

            if (!keyword) {
                closeSuggestions();
                return;
            }

            filteredProvinces = getProvincePaths()
                .map(path => ({
                    id: path.id,
                    path,
                    ...getProvinceData(path.id, path)
                }))
                .filter(province => {
                    return removeAccents(province.name).includes(keyword);
                })
                .slice(0, 10);

            renderSuggestions(filteredProvinces);
        });

        searchInput.addEventListener("keydown", event => {
            if (!suggestionContainer) return;

            const items = suggestionContainer.querySelectorAll(
                "[data-suggestion-index]"
            );

            if (event.key === "ArrowDown") {
                if (!items.length) return;

                event.preventDefault();

                activeSuggestionIndex = Math.min(
                    activeSuggestionIndex + 1,
                    items.length - 1
                );

                updateActiveSuggestion(items);
            }

            if (event.key === "ArrowUp") {
                if (!items.length) return;

                event.preventDefault();

                activeSuggestionIndex = Math.max(
                    activeSuggestionIndex - 1,
                    0
                );

                updateActiveSuggestion(items);
            }

            if (event.key === "Enter") {
                if (activeSuggestionIndex >= 0) {
                    event.preventDefault();

                    const province = filteredProvinces[
                        activeSuggestionIndex
                    ];

                    if (province) {
                        chooseSuggestion(province);
                    }
                } else if (filteredProvinces.length === 1) {
                    event.preventDefault();
                    chooseSuggestion(filteredProvinces[0]);
                }
            }

            if (event.key === "Escape") {
                closeSuggestions();
            }
        });

        document.addEventListener("click", event => {
            if (
                event.target !== searchInput &&
                !suggestionContainer?.contains(event.target)
            ) {
                closeSuggestions();
            }
        });
    }


    function createSuggestionsContainer() {
        if (!searchInput || suggestionContainer) return;

        // Ưu tiên .search-box, nhưng vẫn hoạt động nếu HTML
        // chỉ có div.relative bao quanh ô input.
        const searchBox =
            searchInput.closest(".search-box") ||
            searchInput.parentElement;

        if (!searchBox) {
            console.error("[MapZoom] Không tìm thấy vùng tìm kiếm.");
            return;
        }

        // Bảo đảm dropdown định vị theo vùng tìm kiếm.
        if (window.getComputedStyle(searchBox).position === "static") {
            searchBox.style.position = "relative";
        }

        suggestionContainer = document.createElement("div");
        suggestionContainer.id = "provinceSuggestions";

        // Dùng Tailwind CSS, không cần CSS riêng.
        suggestionContainer.className = [
            "absolute",
            "left-0",
            "right-0",
            "top-full",
            "z-[1000]",
            "mt-2",
            "hidden",
            "max-h-72",
            "overflow-y-auto",
            "rounded-xl",
            "border",
            "border-slate-200",
            "bg-white",
            "shadow-xl"
        ].join(" ");

        suggestionContainer.setAttribute("role", "listbox");
        suggestionContainer.setAttribute(
            "aria-label",
            "Danh sách tỉnh thành gợi ý"
        );

        searchInput.setAttribute(
            "aria-controls",
            "provinceSuggestions"
        );

        searchBox.appendChild(suggestionContainer);
    }



    function renderSuggestions(provinces) {
        if (!suggestionContainer) {
            createSuggestionsContainer();
        }

        if (!suggestionContainer) return;

        activeSuggestionIndex = -1;

        if (!provinces.length) {
            suggestionContainer.innerHTML = `
            <div class="flex items-center gap-3 px-4 py-4 text-sm text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 shrink-0 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.8">
                    <circle cx="11" cy="11" r="7"/>
                    <path stroke-linecap="round" d="m16 16 4 4"/>
                </svg>
                Không tìm thấy tỉnh/thành phù hợp.
            </div>
        `;

            suggestionContainer.classList.remove("hidden");
            return;
        }

        suggestionContainer.innerHTML = provinces.map(
            (province, index) => `
            <button
                type="button"
                role="option"
                aria-selected="false"
                data-suggestion-index="${index}"
                class="flex w-full items-center gap-3 border-b border-slate-100 px-4 py-3 text-left text-sm text-slate-700 transition last:border-b-0 hover:bg-teal-50 hover:text-teal-800 focus:bg-teal-50 focus:outline-none"
            >
                <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="1.8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"/>
                        <circle cx="12" cy="10" r="2.5"/>
                    </svg>
                </span>

                <span class="min-w-0 flex-1 font-semibold">
                    ${escapeHTML(province.name)}
                </span>

                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 shrink-0 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m9 18 6-6-6-6"/>
                </svg>
            </button>
        `
        ).join("");

        suggestionContainer.classList.remove("hidden");

        suggestionContainer
            .querySelectorAll("[data-suggestion-index]")
            .forEach((button, index) => {
                button.addEventListener("mouseenter", () => {
                    activeSuggestionIndex = index;

                    updateActiveSuggestion(
                        suggestionContainer.querySelectorAll(
                            "[data-suggestion-index]"
                        )
                    );
                });

                button.addEventListener("click", () => {
                    chooseSuggestion(provinces[index]);
                });
            });
    }



    function updateActiveSuggestion(items) {
        items.forEach((item, index) => {
            const active = index === activeSuggestionIndex;

            item.classList.toggle("bg-teal-50", active);
            item.classList.toggle("text-teal-800", active);
            item.classList.toggle("bg-white", !active);
            item.classList.toggle("text-slate-700", !active);

            item.setAttribute(
                "aria-selected",
                String(active)
            );
        });

        items[activeSuggestionIndex]?.scrollIntoView({
            block: "nearest"
        });
    }


    function chooseSuggestion(province) {
        if (!province) return;

        if (searchInput) {
            searchInput.value = province.name;
        }

        closeSuggestions();
        selectProvince(province.id);
    }


    function closeSuggestions() {
        if (!suggestionContainer) return;

        suggestionContainer.classList.add("hidden");
        suggestionContainer.innerHTML = "";

        activeSuggestionIndex = -1;
        filteredProvinces = [];

        searchInput?.removeAttribute("aria-activedescendant");
    }


    // =====================================================
    // 14. THAY ĐỔI KÍCH THƯỚC MÀN HÌNH
    // =====================================================

    let resizeTimer = null;

    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {
            if (!svgElement) return;

            // Chỉ căn lại khi cửa sổ thay đổi kích thước.
            // Không thay đổi tọa độ bản đồ trong lúc kéo hoặc zoom.
            if (activeProvinceId) {
                const path = svgDocument.getElementById(activeProvinceId);

                if (path) {
                    zoomToProvince(path);
                    return;
                }
            }

            applyTransform();
        }, 150);
    });

    // =====================================================
    // 15. HÀM TƯƠNG THÍCH VỚI CODE CŨ
    // =====================================================
    // Giúp các đoạn code khác có thể gọi:
    // zoomTo(...)
    // zoomProvince(...)
    // zoomToProvince(...)
    // resetInteractiveMap(...)
    // resetMap(...)

    window.zoomTo = zoomTo;

    window.zoomProvince = function (zoomData = {}) {
        zoomTo({
            scale: zoomData.scale ??
                (isMobile()
                    ? CONFIG.provinceScale.mobile
                    : CONFIG.provinceScale.desktop),
            translateX: zoomData.translateX ?? 0,
            translateY: zoomData.translateY ?? 0
        });
    };

    window.zoomToProvince = zoomToProvince;
    window.resetInteractiveMap = resetMap;
    window.resetMap = resetMap;
    window.selectProvince = selectProvince;
})();