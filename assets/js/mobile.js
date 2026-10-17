document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const mainNavigation = document.getElementById("mainNavigation");
    const menuIcon = document.getElementById("menuIcon");
    const navLinks = document.querySelectorAll(".nav-link");

    const currentPage =
        window.location.pathname.split("/").filter(Boolean).pop() || "khampha.html";

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();
        const isActive = linkPage === currentPage;

        link.classList.toggle("bg-vietnam-red", isActive);
        link.classList.toggle("text-white", isActive);
        link.classList.toggle("text-vietnam-muted", !isActive);

        if (isActive) {
            link.setAttribute("aria-current", "page");
        } else {
            link.classList.add("hover:bg-vietnam-light", "hover:text-vietnam-red");
            link.removeAttribute("aria-current");
        }
    });

    if (!menuToggle || !mainNavigation || !menuIcon) return;

    function closeMenu() {
        mainNavigation.classList.add("hidden");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Mở menu điều hướng");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }

    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

        if (isExpanded) {
            closeMenu();
        } else {
            mainNavigation.classList.remove("hidden");
            menuToggle.setAttribute("aria-expanded", "true");
            menuToggle.setAttribute("aria-label", "Đóng menu điều hướng");
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-xmark");
        }
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 1024) closeMenu();
        });
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1024) closeMenu();
    });
});