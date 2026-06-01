// [DATA] Khởi tạo mảng sinh viên
const sinhVien = [
    { maSV: "SV001", hoTen: "Nguyễn Văn A", diemTB: 8.5 },
    { maSV: "SV002", hoTen: "Trần Thị B", diemTB: 7.2 }
];
console.log("Dữ liệu đã khởi tạo:", sinhVien);

// [DOM] Render danh sách sinh viên
function renderTable() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = sinhVien.map(sv => `
        <tr>
            <td>${sv.maSV}</td>
            <td>${sv.hoTen}</td>
            <td>${sv.diemTB}</td>
        </tr>
    `).join('');
}
renderTable();