
"use strict";

// ================= DOM ELEMENTS =================
const searchInput = document.getElementById("searchInput");
const clearSearchButton = document.getElementById("clearSearchButton");
const searchHint = document.getElementById("searchHint");
const ethnicList = document.getElementById("ethnicList");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const emptyShowAllButton = document.getElementById("emptyShowAllButton");

const detailModal = document.getElementById("detailModal");
const modalContainer = document.getElementById("modalContainer");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModalButton = document.getElementById("closeModalButton");

const menuToggle = document.getElementById("menuToggle");
const mainNavigation = document.getElementById("mainNavigation");
const menuIcon = document.getElementById("menuIcon");

let previousFocusedElement = null;

// ================= UTILITIES =================

// Chuẩn hóa văn bản để tìm kiếm không phân biệt dấu.
function normalizeText(value = "") {
    return String(value)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase()
        .trim();
}

// Tạo phần tử HTML an toàn.
function createElement(tag, className, text = "") {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text !== "") {
        element.textContent = text;
    }

    return element;
}

// Tạo ảnh có xử lý khi tải thất bại.
function createImage(src, alt, className) {
    const image = document.createElement("img");

    image.src = src || "";
    image.alt = alt || "";
    image.className = className;
    image.loading = "lazy";
    image.decoding = "async";

    image.addEventListener("error", function () {
        image.classList.add("hidden");
    }, { once: true });

    return image;
}

// ================= RENDER LIST =================

function renderEthnicGroups(keyword = "") {
    const query = normalizeText(keyword);

    const filteredGroups = ethnicGroups.filter(group => {
        const searchableText = normalizeText([
            group.name,
            group.other,
            group.region,
            group.intro
        ].join(" "));

        return searchableText.includes(query);
    });

    ethnicList.replaceChildren();

    resultCount.textContent =
        `Hiển thị ${filteredGroups.length} / ${ethnicGroups.length} dân tộc`;

    emptyState.classList.toggle("hidden", filteredGroups.length !== 0);
    ethnicList.classList.toggle("hidden", filteredGroups.length === 0);

    filteredGroups.forEach(group => {
        const card = createElement(
            "article",
            "group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-card"
        );

        // Ảnh đại diện
        const imageWrapper = createElement(
            "div",
            "relative h-48 shrink-0 overflow-hidden bg-vietnam-cream sm:h-52"
        );

        const image = createImage(
            group.img,
            `Hình ảnh dân tộc ${group.name}`,
            "h-full w-full object-cover transition duration-500 group-hover:scale-105"
        );

        imageWrapper.appendChild(image);

        const imageBadge = createElement(
            "span",
            "absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm",
            group.region
        );

        imageWrapper.appendChild(imageBadge);

        // Nội dung card
        const content = createElement(
            "div",
            "flex flex-1 flex-col p-3 sm:p-3"
        );

        const title = createElement(
            "h3",
            "text-lg font-extrabold leading-snug text-slate-800 transition group-hover:text-vietnam-red sm:text-xl",
            group.name
        );

        const otherNames = createElement(
            "p",
            "mt-1 text-xs high-1 leading-5 text-slate-500 sm:text-sm",
            group.other || ""
        );

        const divider = createElement(
            "div",
            "my-3 border-t border-slate-100"
        );

        // Nút xem chi tiết
        const detailButton = createElement(
            "button",
            "mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-vietnam-red px-4 py-3 text-sm font-bold text-white transition hover:bg-vietnam-dark focus:outline-none focus:ring-4 focus:ring-red-200",
            "Xem chi tiết"
        );

        detailButton.type = "button";
        detailButton.setAttribute(
            "aria-label",
            `Xem chi tiết dân tộc ${group.name}`
        );

        const buttonIcon = document.createElement("i");
        buttonIcon.className = "fa-solid fa-arrow-right";
        buttonIcon.setAttribute("aria-hidden", "true");

        detailButton.appendChild(buttonIcon);

        detailButton.addEventListener("click", () => {
            openDetailModal(group);
        });

        content.append(
            title,
            otherNames,
            divider,
            detailButton
        );

        card.append(imageWrapper, content);
        ethnicList.appendChild(card);
    });
}

// ================= SEARCH =================

// Tìm kiếm trực tiếp và cập nhật trạng thái nút xóa.
function handleSearch() {
    const keyword = searchInput.value;
    const hasKeyword = keyword.trim().length > 0;

    renderEthnicGroups(keyword);

    clearSearchButton.classList.toggle("hidden", !hasKeyword);
    clearSearchButton.classList.toggle("flex", hasKeyword);

    searchHint.textContent = hasKeyword
        ? "Danh sách được lọc tự động theo từ khóa của bạn."
        : "Tìm kiếm theo tên dân tộc, tên gọi khác hoặc địa phương.";
}

// Lọc ngay khi người dùng nhập.
searchInput.addEventListener("input", handleSearch);

// Xóa từ khóa bằng nút X.
clearSearchButton.addEventListener("click", () => {
    searchInput.value = "";
    handleSearch();
    searchInput.focus();
});

// Nhấn Escape trong ô tìm kiếm để xóa từ khóa.
searchInput.addEventListener("keydown", event => {
    if (event.key === "Escape" && searchInput.value) {
        event.preventDefault();
        searchInput.value = "";
        handleSearch();
    }
});

// Nếu còn nút thao tác trong trạng thái không có kết quả,
// nút đó cũng sẽ xóa từ khóa để người dùng tìm lại.
if (emptyShowAllButton) {
    emptyShowAllButton.addEventListener("click", () => {
        searchInput.value = "";
        handleSearch();
        searchInput.focus();
    });
}

// ================= MODAL HELPERS =================

function createInfoSection(iconName, title, content) {
    const section = createElement(
        "section",
        "rounded-xl border border-slate-100 bg-white p-4 sm:p-5"
    );

    const heading = createElement(
        "h3",
        "mb-2 flex items-center gap-2.5 text-sm font-extrabold text-slate-800 sm:text-base"
    );

    const iconWrapper = createElement(
        "span",
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-vietnam-light text-vietnam-red"
    );

    const icon = document.createElement("i");
    icon.className = `fa-solid ${iconName}`;
    icon.setAttribute("aria-hidden", "true");

    iconWrapper.appendChild(icon);

    const headingText = createElement("span", "", title);
    heading.append(iconWrapper, headingText);

    const paragraph = createElement(
        "p",
        "whitespace-pre-line text-sm leading-7 text-slate-600",
        content || "Thông tin đang được cập nhật."
    );

    section.append(heading, paragraph);

    return section;
}

function openDetailModal(group) {
    if (!group) return;

    previousFocusedElement = document.activeElement;

    modalTitle.textContent = group.name;
    modalBody.replaceChildren();

    // Tổng quan
    const overview = createElement(
        "section",
        "mb-5 grid grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-5"
    );

    const heroImageWrapper = createElement(
        "div",
        "relative min-h-48 overflow-hidden rounded-xl bg-vietnam-cream sm:col-span-2 sm:min-h-64"
    );

    const heroImage = createImage(
        group.img,
        `Ảnh đại diện dân tộc ${group.name}`,
        "absolute inset-0 h-full w-full object-cover"
    );

    heroImage.loading = "eager";
    heroImageWrapper.appendChild(heroImage);

    const overviewContent = createElement(
        "div",
        "flex flex-col justify-center rounded-xl border border-red-100 bg-white p-4 sm:col-span-3 sm:p-5"
    );

    const tag = createElement(
        "span",
        "mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-vietnam-light px-3 py-1.5 text-xs font-bold text-vietnam-red",
        "Thông tin khái quát"
    );

    const tagIcon = document.createElement("i");
    tagIcon.className = "fa-solid fa-circle-info";
    tagIcon.setAttribute("aria-hidden", "true");
    tag.prepend(tagIcon);

    const groupName = createElement(
        "h3",
        "text-2xl font-extrabold text-vietnam-dark sm:text-3xl",
        group.name
    );

    const location = createElement(
        "p",
        "mt-3 flex items-start gap-2 text-sm leading-6 text-slate-600"
    );

    const locationIcon = document.createElement("i");
    locationIcon.className =
        "fa-solid fa-location-dot mt-1 shrink-0 text-vietnam-red";
    locationIcon.setAttribute("aria-hidden", "true");

    const locationText = document.createElement("span");
    locationText.textContent =
        `Địa phương cư trú: ${group.region || "Chưa cập nhật"}`;

    location.append(locationIcon, locationText);

    const otherNames = createElement(
        "div",
        "mt-3 border-t border-slate-100 pt-3"
    );

    const otherLabel = createElement(
        "p",
        "mb-1 text-xs font-bold uppercase tracking-wide text-slate-400",
        "Tên gọi khác"
    );

    const otherText = createElement(
        "p",
        "text-sm leading-6 text-slate-600",
        group.other || "Chưa cập nhật"
    );

    otherNames.append(otherLabel, otherText);
    overviewContent.append(tag, groupName, location, otherNames);
    overview.append(heroImageWrapper, overviewContent);

    modalBody.appendChild(overview);

    // Nội dung chi tiết
    const detailsGrid = createElement(
        "div",
        "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
    );

    const sections = [
        {
            icon: "fa-book-open",
            title: "Giới thiệu chung",
            content: group.intro
        },
        {
            icon: "fa-landmark",
            title: "Lịch sử và nguồn gốc",
            content: group.history
        },
        {
            icon: "fa-seedling",
            title: "Hoạt động sản xuất",
            content: group.production
        },
        {
            icon: "fa-hands-praying",
            title: "Phong tục và tập quán",
            content: group.customs
        },
        {
            icon: "fa-house",
            title: "Đời sống và sinh hoạt",
            content: group.lifestyle
        },
        {
            icon: "fa-music",
            title: "Văn hóa và nghệ thuật",
            content: group.culture
        }
    ];

    sections.forEach(item => {
        if (item.content) {
            detailsGrid.appendChild(
                createInfoSection(
                    item.icon,
                    item.title,
                    item.content
                )
            );
        }
    });

    if (detailsGrid.children.length > 0) {
        modalBody.appendChild(detailsGrid);
    }

    // Thư viện ảnh
    if (Array.isArray(group.images) && group.images.length > 0) {
        const gallery = createElement(
            "section",
            "mt-5 rounded-xl border border-slate-100 bg-white p-4 sm:p-5"
        );

        const galleryTitle = createElement(
            "h3",
            "mb-4 flex items-center gap-2 text-base font-extrabold text-slate-800"
        );

        const galleryIcon = document.createElement("i");
        galleryIcon.className = "fa-solid fa-images text-vietnam-red";
        galleryIcon.setAttribute("aria-hidden", "true");

        galleryTitle.append(
            galleryIcon,
            document.createTextNode("Hình ảnh văn hóa")
        );

        const galleryGrid = createElement(
            "div",
            "grid grid-cols-2 gap-3 sm:grid-cols-3"
        );

        group.images.forEach((src, index) => {
            const figure = createElement(
                "figure",
                "overflow-hidden rounded-xl bg-vietnam-cream"
            );

            const image = createImage(
                src,
                `Hình ảnh ${index + 1} về dân tộc ${group.name}`,
                "aspect-[4/3] w-full object-cover transition duration-300 hover:scale-105"
            );

            figure.appendChild(image);
            galleryGrid.appendChild(figure);
        });

        gallery.append(galleryTitle, galleryGrid);
        modalBody.appendChild(gallery);
    }

    // Hiển thị modal
    detailModal.classList.remove("hidden");
    detailModal.classList.add("flex");
    detailModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
    closeModalButton.focus();
}

function closeDetailModal() {
    if (detailModal.classList.contains("hidden")) return;

    detailModal.classList.add("hidden");
    detailModal.classList.remove("flex");
    detailModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    if (
        previousFocusedElement &&
        typeof previousFocusedElement.focus === "function"
    ) {
        previousFocusedElement.focus();
    }
}

// ================= CLOSE MODAL EVENTS =================

closeModalButton.addEventListener("click", closeDetailModal);

// Bấm bên ngoài hộp thông tin để đóng modal.
detailModal.addEventListener("click", event => {
    if (event.target === detailModal) {
        closeDetailModal();
    }
});

// Phím Escape đóng modal và giữ focus trong modal khi dùng Tab.
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeDetailModal();
    }

    if (
        event.key === "Tab" &&
        !detailModal.classList.contains("hidden")
    ) {
        const focusable = modalContainer.querySelectorAll(
            'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (
            event.shiftKey &&
            document.activeElement === first
        ) {
            event.preventDefault();
            last.focus();
        } else if (
            !event.shiftKey &&
            document.activeElement === last
        ) {
            event.preventDefault();
            first.focus();
        }
    }
});

// ================= MOBILE NAVIGATION =================

if (menuToggle && mainNavigation && menuIcon) {
    menuToggle.addEventListener("click", () => {
        const isExpanded =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute("aria-expanded", String(!isExpanded));
        mainNavigation.classList.toggle("hidden", isExpanded);

        menuIcon.classList.toggle("fa-bars", isExpanded);
        menuIcon.classList.toggle("fa-xmark", !isExpanded);
    });

    // Đóng menu khi chọn liên kết trên điện thoại.
    mainNavigation.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 1024) {
                mainNavigation.classList.add("hidden");
                menuToggle.setAttribute("aria-expanded", "false");

                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
            }
        });
    });
}

// ================= INITIALIZE =================

// Hiển thị danh sách ban đầu và ẩn nút X.
handleSearch();
