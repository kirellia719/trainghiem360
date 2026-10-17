from html.parser import HTMLParser
from pathlib import Path
import json
import re
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parents[1]
PROVINCE_DIR = ROOT / "pages" / "tinh-thanh"
PROVINCE_DATA = PROVINCE_DIR / "data" / "provinces.json"


class LocalReferenceParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.references = []

    def handle_starttag(self, tag, attrs):
        self.references.extend(
            value
            for name, value in attrs
            if name in {"href", "src", "poster", "data"} and value
        )


def test_html_local_references_resolve():
    missing = []
    for page in ROOT.rglob("*.html"):
        parser = LocalReferenceParser()
        parser.feed(page.read_text(encoding="utf-8", errors="replace"))
        for reference in parser.references:
            parsed = urlsplit(reference)
            if parsed.path and not parsed.scheme and not parsed.netloc:
                if not (page.parent / parsed.path).resolve().exists():
                    missing.append(f"{page}: {reference}")

    assert not missing, "Broken local HTML references:\n" + "\n".join(missing)


def test_provinces_use_one_template_and_json_records():
    data = json.loads(PROVINCE_DATA.read_text(encoding="utf-8"))
    assert (PROVINCE_DIR / "template.html").is_file()
    assert len(data) == 33
    assert len(list(PROVINCE_DIR.glob("*.html"))) == 34

    required = {
        "slug", "name", "type", "mapUrl", "introduction", "facts", "ethnic",
        "geography", "culture", "gallery", "economy",
    }
    for slug, province in data.items():
        assert province["slug"] == slug
        assert province["type"] in {"Tỉnh", "Thành phố"}
        assert required <= province.keys()
        assert province["name"] and province["introduction"] and province["mapUrl"]
        assert province["culture"]["description"]
        assert re.search(rf"^(Tỉnh|Thành phố) {re.escape(province['name'])} -", province["title"])

        legacy = PROVINCE_DIR / f"{slug}.html"
        content = legacy.read_text(encoding="utf-8", errors="replace")
        assert f"template.html?province={slug}" in content
        for image in province["gallery"]:
            parsed_image = urlsplit(image["src"])
            if not parsed_image.scheme and parsed_image.path:
                assert (ROOT / parsed_image.path).is_file(), f"{slug}: {image['src']}"


def test_template_and_map_point_to_json_template():
    template = (PROVINCE_DIR / "template.html").read_text(encoding="utf-8", errors="replace")
    assert "../../assets/js/province-page.js" in template
    assert 'data-shared="province-header"' in template
    assert 'data-shared="province-footer"' in template

    map_script = (ROOT / "assets" / "js" / "map-zoom.js").read_text(encoding="utf-8", errors="replace")
    data = json.loads(PROVINCE_DATA.read_text(encoding="utf-8"))
    for slug in data:
        assert f"pages/tinh-thanh/template.html?province={slug}" in map_script


def test_css_local_urls_resolve():
    missing = []
    for stylesheet in (ROOT / "assets" / "css").glob("*.css"):
        content = stylesheet.read_text(encoding="utf-8", errors="replace")
        for reference in re.findall(r"url\([\"']?([^\)\"']+)", content):
            if reference.startswith(("data:", "http:", "https:")):
                continue
            if not (stylesheet.parent / reference).resolve().exists():
                missing.append(f"{stylesheet.relative_to(ROOT)}: {reference}")

    assert not missing, "Broken local CSS references:\n" + "\n".join(missing)


def test_site_pages_share_be_vietnam_and_red_branding():
    styled_pages = [
        "danang.html", "danang1.html", "dantoc.html", "khampha.html",
        "lienhe.html", "tulieu.html", "vietnam.html",
    ]
    for relative in styled_pages:
        content = (ROOT / relative).read_text(encoding="utf-8", errors="replace")
        assert "assets/css/design-system.css" in content, relative

    template = (PROVINCE_DIR / "template.html").read_text(encoding="utf-8", errors="replace")
    assert "../../assets/css/design-system.css" in template

    design = (ROOT / "assets" / "css" / "design-system.css").read_text(encoding="utf-8")
    assert "Be+Vietnam+Pro" in design
    assert "--brand-red: #b21f35" in design

    home = (ROOT / "index.html").read_text(encoding="utf-8", errors="replace")
    assert "Be+Vietnam+Pro" in home
    assert "tide: '#b21f35'" in home
    assert "bg-gradient-to-br from-[#fff5f3]" in home

    game = (ROOT / "game.html").read_text(encoding="utf-8", errors="replace")
    assert "Be+Vietnam+Pro" in game
    assert "background: linear-gradient(135deg, #b21f35, #d63b4e)" in game
