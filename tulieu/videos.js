// =====================================================
// 1. DỮ LIỆU VIDEO TƯ LIỆU
// =====================================================

const videosData = [
    {
        title: "Lịch sử Đà Nẵng",
        category: "Lịch sử",
        icon: "fa-landmark",
        description:
            "Tìm hiểu quá trình hình thành và phát triển của thành phố qua các thời kỳ.",
        src: "/assets/videos/lichsu.mp4",
        poster:
            "https://danangsensetravel.com/view/at_da-nang-nhin-tu-qua-khu_1368676138c01d2e118f380dd798f43d.jpg"
    },
    {
        title: "Văn hóa Đà Nẵng",
        category: "Văn hóa",
        icon: "fa-masks-theater",
        description:
            "Khám phá nét đẹp văn hóa, lễ hội truyền thống và đời sống tinh thần.",
        src: "/assets/videos/Bảng phân cảnh 2.mp4",
        poster:
            "https://bizweb.dktcdn.net/100/539/761/files/le-hoi-quan-the-am-da-nang.jpg?v=1741137578148"
    },
    {
        title: "Sông – Núi – Biển",
        category: "Thiên nhiên",
        icon: "fa-mountain-sun",
        description:
            "Chiêm ngưỡng cảnh quan thiên nhiên từ dòng sông, núi non đến biển xanh.",
        src: "/assets/videos/Bảng phân cảnh 3.mp4",
        poster:
            "https://static.vinwonders.com/2022/03/bai-bien-da-nang-1.jpeg"
    },
    {
        title: "Khám phá Đà Nẵng",
        category: "Khám phá",
        icon: "fa-compass",
        description:
            "Khám phá các điểm đến nổi bật và vẻ đẹp riêng của vùng đất Đà Nẵng.",
        src: "/assets/videos/Bảng phân cảnh 4.mp4",
        poster:
            "https://hoangphuan.com/wp-content/uploads/2024/06/tour-du-lich-da-nang-hap-dan-nhat.webp"
    }
];


// =====================================================
// 2. LẤY CÁC PHẦN TỬ DOM
// =====================================================

const videosContainer = document.getElementById("videos-tulieu");
const videoModal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const videoModalTitle = document.getElementById("videoModalTitle");
const closeVideoButton = document.getElementById("closeVideoButton");


// =====================================================
// 3. TẠO THẺ VIDEO
// Dùng DOM API để tránh chèn dữ liệu thành HTML trực tiếp
// =====================================================

function createVideoCard(video, index) {
    const button = document.createElement("button");

    button.type = "button";
    button.className =
        "group overflow-hidden rounded-2xl border border-[#A51F2B]/10 bg-white text-left shadow-[0_12px_35px_rgba(89,34,34,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(89,34,34,0.12)]";

    button.setAttribute("aria-label", `Xem video ${video.title}`);

    // Khu vực ảnh bìa
    const thumbnail = document.createElement("div");
    thumbnail.className =
        "relative aspect-video overflow-hidden bg-slate-100";

    const image = document.createElement("img");
    image.src = video.poster;
    image.alt = video.title;
    image.loading = "lazy";
    image.className =
        "h-full w-full object-cover transition duration-500 group-hover:scale-105";

    // Lớp phủ và nút phát
    const overlay = document.createElement("div");
    overlay.className =
        "absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/40";

    const playCircle = document.createElement("span");
    playCircle.className =
        "flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-xl text-[#A51F2B] shadow-lg transition group-hover:scale-110";

    const playIcon = document.createElement("i");
    playIcon.className = "fa-solid fa-play ml-1";
    playCircle.appendChild(playIcon);
    overlay.appendChild(playCircle);

    // Nhãn xem video
    const watchLabel = document.createElement("span");
    watchLabel.className =
        "absolute bottom-3 left-3 rounded-md bg-black/65 px-2.5 py-1 text-xs font-bold text-white";

    thumbnail.append(image, overlay, watchLabel);

    // Nội dung thẻ
    const content = document.createElement("div");
    content.className = "p-5";

    const category = document.createElement("div");
    category.className =
        "mb-2 text-xs font-bold uppercase tracking-wider text-[#A51F2B]";

    const categoryIcon = document.createElement("i");
    categoryIcon.className = `fa-solid ${video.icon} mr-1`;

    category.append(categoryIcon, document.createTextNode(video.category));

    const title = document.createElement("h3");
    title.className =
        "text-lg font-extrabold text-[#302927] transition group-hover:text-[#A51F2B]";
    title.textContent = video.title;

    const description = document.createElement("p");
    description.className =
        "mt-2 text-sm leading-6 text-[#766B66]";
    description.textContent = video.description;

    content.append(category, title, description);
    button.append(thumbnail, content);

    // Mở modal khi nhấn thẻ
    button.addEventListener("click", () => {
        openVideoModal(video.src, video.title);
    });

    return button;
}


// =====================================================
// 4. RENDER DANH SÁCH VIDEO
// =====================================================

function renderVideos() {
    if (!videosContainer) {
        console.error('Không tìm thấy #videos-tulieu.');
        return;
    }

    const fragment = document.createDocumentFragment();

    videosData.forEach((video, index) => {
        fragment.appendChild(createVideoCard(video, index));
    });

    videosContainer.replaceChildren(fragment);
}


// =====================================================
// 5. MỞ MODAL VÀ PHÁT VIDEO
// =====================================================

function openVideoModal(videoSrc, videoTitle) {
    videoModalTitle.textContent = videoTitle;

    // Gán nguồn video được chọn
    modalVideo.src = videoSrc;

    // Hiển thị modal
    videoModal.classList.remove("hidden");
    videoModal.classList.add("flex");

    // Ngăn trang phía sau cuộn
    document.body.classList.add("overflow-hidden");

    // Tải và phát video
    modalVideo.load();

    const playPromise = modalVideo.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            // Người dùng có thể nhấn Play nếu trình duyệt
            // không cho phép tự động phát video.
        });
    }

    closeVideoButton.focus();
}


// =====================================================
// 6. ĐÓNG MODAL VÀ DỪNG VIDEO
// =====================================================

function closeVideoModal() {
    modalVideo.pause();
    modalVideo.removeAttribute("src");
    modalVideo.load();

    videoModal.classList.add("hidden");
    videoModal.classList.remove("flex");

    document.body.classList.remove("overflow-hidden");
}


// Nút đóng
closeVideoButton.addEventListener("click", closeVideoModal);


// Nhấn vào nền tối để đóng modal
videoModal.addEventListener("click", (event) => {
    if (event.target === videoModal) {
        closeVideoModal();
    }
});


// Nhấn Escape để đóng modal
document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        !videoModal.classList.contains("hidden")
    ) {
        closeVideoModal();
    }
});


// =====================================================
// 7. KHỞI TẠO
// =====================================================

renderVideos();