# Phản tư Bài tập 4.0: DOM Thuần vs React

### 1. Ở Phần A, mỗi lần thêm/xóa/toggle 1 todo, bạn phải gọi bao nhiêu hàm? Liệt kê.
Mỗi khi có sự thay đổi dữ liệu (thêm, xóa, thay đổi trạng thái hoàn thành), chúng ta phải gọi **2 hàm tiếp diễn nhau**:
- Hàm trực tiếp xử lý sự kiện tương tác (`addTodo()`, `deleteTodo(id)`, hoặc `toggleTodo(id)`) nhằm chỉnh sửa mảng dữ liệu gốc `todos`.
- Ngay sau đó, bắt buộc phải gọi hàm `renderTodos()` một cách thủ công để tái cấu trúc lại toàn bộ mã HTML và ép trình duyệt vẽ lại giao diện từ đầu. Nếu quên gọi hàm render này, giao diện sẽ bị đồng bộ lệch với dữ liệu thực tế.

### 2. Ở Phần B, khi `setTodos(...)` chạy, React tự động làm gì giúp bạn?
Khi hàm kích hoạt thay đổi trạng thái `setTodos(...)` được thực thi, React sẽ tự động thực hiện các chuỗi hành động sau mà lập trình viên không cần can thiệp thủ công:
- Đánh dấu component cần re-render do phát hiện `state` mới đã thay đổi.
- Tạo ra một cây Virtual DOM (DOM ảo) mới phản ánh trạng thái dữ liệu vừa cập nhật.
- Sử dụng thuật toán so sánh (Diffing Algorithm) để tìm ra sự khác biệt duy nhất giữa cây Virtual DOM mới này và Virtual DOM cũ.
- Chỉ cập nhật (patch) chính xác phần tử bị thay đổi lên cây DOM thật của trình duyệt thay vì xóa đi viết lại toàn bộ container, giúp tối ưu hóa hiệu năng đáng kể.

### 3. Nếu Portfolio của Minh có 50 project, cách nào quản lý danh sách an toàn hơn? Tại sao?
Sử dụng **React (Cách ở Phần B)** an toàn, bảo trì dễ và ít sinh lỗi hơn nhiều. 
- Với Vanilla JS, khi danh sách tăng lên hoặc tích hợp thêm nhiều tính năng (lọc danh sách, chỉnh sửa nội dung, tìm kiếm nâng cao), mã nguồn thao tác chuỗi HTML dạng string (`innerHTML`) sẽ vô cùng phức tạp, dễ dính lỗi bảo mật (XSS) và rất khó kiểm soát việc gắn hay hủy các sự kiện lắng nghe (`event listeners`).
- Với React, giao diện là kết quả phản chiếu trực tiếp từ dữ liệu nguyên bản ($UI = f(state)$). Chúng ta chỉ cần tập trung quản lý một mảng dữ liệu gồm 50 đối tượng JavaScript thật sạch sẽ, giao diện sẽ tự động biến đổi ăn khớp theo dòng chảy dữ liệu đó một cách chuẩn xác.

### 4. Kết nối Portfolio: Tưởng tượng `ProjectCard` thay cho `TodoItem` — mỗi project cũng cần hiển thị, lọc theo category, xóa bỏ. Bạn thấy `useState` + `.map()` + `.filter()` sẽ áp dụng như thế nào cho Portfolio?
Sự kết hợp này tạo nên nền tảng cốt lõi của ứng dụng Web hiện đại:
- `useState`: Dùng để lưu trữ toàn bộ danh sách các project gốc (ví dụ: `[projects, setProjects]`) và lưu trữ danh mục đang được chọn để lọc (ví dụ: `[activeCategory, setActiveCategory]`).
- `.filter()`: Trước khi đưa dữ liệu qua khối hiển thị, ta sử dụng `.filter()` dựa trên `activeCategory` để chiết xuất ra một mảng con chỉ chứa các dự án thuộc danh mục người dùng muốn xem (như Web, Mobile, AI...).
- `.map()`: Duyệt qua mảng con đã lọc để ánh xạ (map) từng object thông tin project thành một React Component `<ProjectCard key={project.id} data={project} />` giúp render ra giao diện gọn gàng và trực quan.