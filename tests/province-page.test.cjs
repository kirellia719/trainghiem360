const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const renderer = fs.readFileSync(path.join(root, "assets/js/province-page.js"), "utf8");
const provinces = JSON.parse(fs.readFileSync(path.join(root, "pages/tinh-thanh/data/provinces.json"), "utf8"));

class MockElement {
  constructor(tag) {
    this.tagName = tag.toUpperCase();
    this.children = [];
    this.attributes = {};
    this.className = "";
    this._textContent = "";
    this.removed = false;
    this.rendered = null;
  }

  append(...nodes) {
    nodes.forEach((node) => {
      if (typeof node !== "string") node.parent = this;
      this.children.push(node);
    });
  }
  replaceChildren(...nodes) {
    this.children = [];
    this.append(...nodes);
  }
  replaceWith(node) { this.rendered = node; }
  setAttribute(name, value) { this.attributes[name] = String(value); }
  remove() {
    this.removed = true;
    if (this.parent) this.parent.children = this.parent.children.filter((child) => child !== this);
  }
  get textContent() {
    return this._textContent + this.children.map((child) => typeof child === "string" ? child : child.textContent || "").join("");
  }
  set textContent(value) { this._textContent = String(value); this.children = []; }
}

async function renderProvince(slug) {
  const placeholder = new MockElement("main");
  const document = {
    title: "",
    getElementById: () => placeholder,
    createElement: (tag) => new MockElement(tag),
    createTextNode: (text) => String(text),
  };
  const context = {
    document,
    window: { location: { search: `?province=${slug}` } },
    URLSearchParams,
    fetch: async () => ({ ok: true, json: async () => provinces }),
  };
  vm.runInNewContext(renderer, context, { filename: "province-page.js" });
  await new Promise((resolve) => setImmediate(resolve));
  return { document, placeholder };
}

function descendants(node, tagName) {
  return node.children.flatMap((child) => {
    if (typeof child === "string") return [];
    return [...(child.tagName === tagName ? [child] : []), ...descendants(child, tagName)];
  });
}

test("renderer builds a province page from its JSON record", async () => {
  const { document, placeholder } = await renderProvince("angiang");
  const page = placeholder.rendered;
  assert.ok(page, "renderer should replace the loading placeholder");
  assert.equal(document.title, "Tỉnh An Giang - Module Trải Nghiệm Thông Minh");
  assert.match(descendants(page, "H1")[0].textContent, /TỈNH AN GIANG/);
  assert.equal(descendants(page, "IFRAME")[0].src, provinces.angiang.mapUrl);
  assert.equal(descendants(page, "IMG").length, 3);
  assert.ok(descendants(page, "IMG").some((img) => img.src.startsWith("../../assets/images/")));
  assert.ok(descendants(page, "H2").some((heading) => heading.textContent.includes("Vị trí địa lý")));
});

test("renderer handles optional sections and external image URLs", async () => {
  const { placeholder } = await renderProvince("thanhhoa");
  const page = placeholder.rendered;
  assert.ok(page);
  assert.equal(descendants(page, "IMG").length, 0);
  assert.ok(!descendants(page, "H2").some((heading) => heading.textContent.includes("Đặc điểm kinh tế")));

  const dienbien = await renderProvince("dienbien");
  const image = descendants(dienbien.placeholder.rendered, "IMG")[0];
  assert.match(image.src, /^https:\/\//);
});

test("renderer reports an unknown province instead of throwing", async () => {
  const { placeholder } = await renderProvince("missing");
  assert.match(placeholder.children[0].textContent, /Chưa có dữ liệu/);
});
