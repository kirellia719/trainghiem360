(() => {
  const root = "../../";
  const header = document.querySelector('[data-shared="province-header"]');
  const footer = document.querySelector('[data-shared="province-footer"]');

  if (header) {
    header.innerHTML = `
      <div class="nav">
        <a class="logo" href="${root}index.html" aria-label="Việt Nam — Trang chủ">
          <img src="${root}assets/images/logo.jpg" alt="Logo Việt Nam">
          <span>VIỆT NAM</span>
        </a>
        <nav class="nav-links" id="province-nav" aria-label="Điều hướng chính">
          <a href="${root}khampha.html">Giới thiệu</a>
          <a href="${root}vietnam.html">Việt Nam</a>
          <a href="${root}danang.html">Đà Nẵng</a>
          <a href="${root}dantoc.html">Dân tộc</a>
          <a href="${root}tulieu.html">Tư liệu</a>
          <a href="${root}lienhe.html">Liên hệ - Góp ý</a>
        </nav>
        <button class="hamburger" type="button" aria-label="Mở menu" aria-expanded="false" aria-controls="province-nav">
          <i class="fas fa-bars" aria-hidden="true"></i>
        </button>
      </div>`;

    const menuButton = header.querySelector(".hamburger");
    const menu = header.querySelector(".nav-links");
    menuButton.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("active");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Đóng menu" : "Mở menu");
      menuButton.innerHTML = isOpen
        ? '<i class="fas fa-times" aria-hidden="true"></i>'
        : '<i class="fas fa-bars" aria-hidden="true"></i>';
    });

    const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 80);
    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();
  }

  if (footer) {
    footer.innerHTML = `
      <p>&copy; 2026 MODULE TRẢI NGHIỆM THÔNG MINH - Hành trình khám phá Tổ Quốc</p>`;
  }
})();
