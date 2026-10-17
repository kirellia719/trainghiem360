(() => {
  const root = "../../";
  const container = document.getElementById("province-page");
  const provinceKey = new URLSearchParams(window.location.search).get("province");

  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const renderError = (message) => {
    container.replaceChildren(element("p", "content", message));
  };

  const renderList = (items, className) => {
    const list = element("ul", className);
    items.forEach((item) => {
      const row = element("li");
      if (item.label) row.append(element("strong", "", `${item.label}: `));
      row.append(document.createTextNode(item.value || ""));
      list.append(row);
    });
    return list;
  };

  const render = (province) => {
    document.title = `${province.type} ${province.name} - Module Trải Nghiệm Thông Minh`;
    const main = document.createElement("main");
    main.id = "province-page";
    main.setAttribute("aria-live", "polite");

    const hero = element("section", "hero hero-hanoi");
    const heroContent = element("div", "hero-content");
    const heroText = element("div", "hero-text");
    const heading = element("h1");
    heading.append(document.createTextNode(`${province.type.toLocaleUpperCase("vi")} `));
    heading.append(document.createElement("br"));
    heading.append(element("span", "", province.name.toLocaleUpperCase("vi")));
    heroText.append(heading);
    heroContent.append(heroText);
    hero.append(heroContent);
    const map = element("div", "map-360");
    const iframe = element("iframe");
    iframe.src = province.mapUrl;
    iframe.title = `Bản đồ 360 độ ${province.name}`;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;
    map.append(iframe);
    hero.append(map);
    main.append(hero);

    const contentSection = element("section", "content");
    const content = element("div", "container");
    content.append(element("h2", "main-title", "Giới thiệu chung"));
    const introGrid = element("div", "info-grid");
    const introCard = element("div", "info-card");
    introCard.append(element("p", "", province.introduction));
    const factsCard = element("div", "info-card");
    factsCard.append(renderList(province.facts, ""));
    introGrid.append(introCard, factsCard);
    content.append(introGrid);

    const sections = [
      { title: "Dân tộc", icon: "fa-users", key: "ethnic" },
      { title: "Vị trí địa lý", icon: "fa-map-marked-alt", key: "geography" },
      { title: "Đặc điểm văn hóa", icon: "fa-landmark", key: "culture" },
      { title: "Đặc điểm kinh tế", icon: "fa-chart-line", key: "economy" }
    ];

    sections.forEach(({ title, icon, key }) => {
      const heading = element("h2", "section-title");
      const iconNode = element("i", `fas ${icon}`);
      iconNode.setAttribute("aria-hidden", "true");
      heading.append(iconNode, document.createTextNode(` ${title}`));
      content.append(heading);

      if (key === "ethnic") {
        content.append(element("p", "", province.ethnic));
      } else if (key === "geography") {
        content.append(renderList(province.geography, "location-list"));
      } else if (key === "culture") {
        province.culture.description.forEach((paragraph) => content.append(element("p", "", paragraph)));
        if (province.culture.highlights.length) {
          content.append(renderList(province.culture.highlights, "location-list"));
        }
        if (province.gallery.length) {
          const gallery = element("div", "image-gallery");
          province.gallery.forEach((image, index) => {
            const img = element("img");
            img.src = /^https?:\/\//i.test(image.src) ? image.src : `${root}${image.src}`;
            img.alt = image.alt || `${province.name} — ảnh ${index + 1}`;
            img.loading = "lazy";
            gallery.append(img);
          });
          content.append(gallery);
        }
      } else {
        if (!province.economy.length) {
          heading.remove();
          return;
        }
        province.economy.forEach((paragraph) => content.append(element("p", "", paragraph)));
      }
    });

    contentSection.append(content);
    main.append(contentSection);
    container.replaceWith(main);
  };

  if (!provinceKey || !/^[a-z0-9-]+$/.test(provinceKey)) {
    renderError("Không tìm thấy mã tỉnh/thành trong đường dẫn.");
    return;
  }

  fetch("data/provinces.json")
    .then((response) => {
      if (!response.ok) throw new Error("Không tải được dữ liệu tỉnh/thành.");
      return response.json();
    })
    .then((provinces) => {
      const province = provinces[provinceKey];
      if (!province) throw new Error(`Chưa có dữ liệu cho mã “${provinceKey}”.`);
      render(province);
    })
    .catch((error) => renderError(error.message || "Không thể tải nội dung tỉnh/thành."));
})();
