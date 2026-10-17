# Trải nghiệm 360

Website tĩnh giới thiệu địa danh, văn hóa và tư liệu Việt Nam. Không cần bước build; để tải dữ liệu JSON, hãy chạy website qua máy chủ HTTP.

## Giao diện

Các trang dùng font Be Vietnam Pro, bảng màu đỏ/đỏ rượu vang, nền hồng rất nhạt và chung quy tắc cho điều hướng, tiêu đề, thẻ nội dung, nút và footer. Trang nội dung dùng `assets/css/design-system.css`; riêng trang chủ dùng Tailwind với cùng các token màu và font.

## Cấu trúc dự án

```text
.
├── index.html
├── *.html                         # Các trang nội dung chính
├── pages/tinh-thanh/
│   ├── template.html              # Template dùng chung cho tỉnh/thành
│   ├── data/provinces.json        # Nội dung riêng của 33 địa phương
│   └── <slug>.html                # URL tương thích, chuyển tới template
├── assets/
│   ├── css/
│   ├── images/
│   ├── js/
│   └── videos/
└── tests/
```

## Chạy tại máy

Từ thư mục gốc dự án, chạy:

```bash
python -m http.server 8000
```

Mở `http://localhost:8000`. Trang chi tiết tỉnh/thành dùng `fetch()` để đọc JSON nên cần HTTP server, không mở `template.html` trực tiếp bằng `file://`.

Trang dùng chung có dạng `pages/tinh-thanh/template.html?province=angiang`. Các URL `.html` cũ vẫn chuyển tiếp để giữ liên kết đã tồn tại.

## Thêm hoặc sửa dữ liệu địa phương

Sửa bản ghi trong `pages/tinh-thanh/data/provinces.json`. Mỗi khóa là slug; bản ghi chứa tên, loại địa phương, URL bản đồ, phần giới thiệu, dữ kiện, dân tộc, địa lý, văn hóa, ảnh và kinh tế. Template `pages/tinh-thanh/template.html` cùng `assets/js/province-page.js` dựng nội dung; không nhân bản HTML cho từng địa phương.

Khi thêm địa phương mới, thêm bản ghi JSON, trang chuyển tiếp `<slug>.html` nếu cần URL riêng, và cập nhật liên kết bản đồ tương ứng trong `assets/js/map-zoom.js`.

Header/footer chia sẻ nằm trong `assets/js/province-layout.js`. Tài nguyên dùng chung đặt trong `assets/css/`, `assets/js/`, `assets/images/` và `assets/videos/`.

## Kiểm thử

```bash
python -m pytest -q -p no:cacheprovider
node --test tests/province-page.test.cjs
```
