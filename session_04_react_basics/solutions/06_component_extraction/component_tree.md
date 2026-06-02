# Sơ đồ Cây Component — ShopVN (Exercise 0.6)

## 1. Cấu trúc cây (Component Tree)


App (Parent)
├── Navbar (Props: logo, links)
├── Hero (Props: title, subtitle, buttonText)
├── ProductGrid (Props: title, products)
│   └── ProductCard (Props: image, name, price) [Vòng lặp .map()]
└── Footer (Props: text)


## 2. Phân tích Luồng Dữ liệu (Props Flow)
- **App Component**: Quản lý toàn bộ mảng dữ liệu gốc (`products` và `navLinks`).
- **Navbar**: Nhận `logo` (String) và `links` (Array) để render danh sách menu động.
- **Hero**: Nhận các chuỗi ký tự tiêu đề để hiển thị linh hoạt.
- **ProductGrid**: Nhận mảng `products` từ App, sau đó tiếp tục duyệt mảng để chuyển từng object sản phẩm xuống cho component con `ProductCard`.
- **ProductCard**: Nhận trực tiếp các thuộc tính đơn lẻ (`image`, `name`, `price`) để build giao diện card độc lập.