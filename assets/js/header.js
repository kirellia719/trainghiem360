document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.getElementById('menu-icon');

    // Chuẩn hóa đường dẫn để xác định trang đang mở.
    function getCurrentPage() {
        const path = window.location.pathname;
        return path.split('/')[1] || '/';
    }

    const currentPage = getCurrentPage();

    console.log(currentPage);



    // Tô màu liên kết của trang hiện tại.
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(function (link) {
        const href = link.getAttribute('href');
        const linkPage = href.split('/').pop() || '/';

        const isHomePage = currentPage === '/' && href === '/';
        const isActive = isHomePage || (linkPage !== '/' && linkPage === currentPage);

        if (isActive) {
            link.classList.add('bg-vietnam-red', 'text-white');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('bg-vietnam-red', 'text-white');
            link.removeAttribute('aria-current');

            link.classList.add(
                'text-vietnam-muted',
                'hover:bg-vietnam-light',
                'hover:text-vietnam-red'
            );
        }
    });

    // Đóng menu di động.
    function closeMobileMenu() {
        mobileNav.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Mở menu điều hướng');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }

    // Mở hoặc đóng menu di động.
    menuToggle.addEventListener('click', function () {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            closeMobileMenu();
        } else {
            mobileNav.classList.remove('hidden');
            menuToggle.setAttribute('aria-expanded', 'true');
            menuToggle.setAttribute('aria-label', 'Đóng menu điều hướng');
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        }
    });

    // Đóng menu sau khi chọn một trang.
    mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMobileMenu);
    });

    // Đóng menu khi nhấn Escape.
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeMobileMenu();
        }
    });

    // Đóng menu khi chuyển sang màn hình desktop.
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1024) {
            closeMobileMenu();
        }
    });
});