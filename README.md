# MISA Training – Candidates (UI)

Demo giao diện danh sách **Ứng viên** (AMIS Tuyển dụng) bằng HTML/CSS/JS thuần.

## Tính năng đã làm

- **Hiển thị danh sách ứng viên** từ `localStorage`.

  - Key lưu trữ: `misa_candidates`.
  - Tự **seed dữ liệu mặc định** từ `window.DEFAULT_CANDIDATES` (khai báo trong `js/data/candidate-data.js`) khi chưa có dữ liệu.

- **Tìm kiếm nhanh** theo từ khoá:

  - Họ tên
  - Email
  - Số điện thoại (hỗ trợ nhập có/không có ký tự phân cách)

- **Phân trang**

  - Chọn số bản ghi/trang: 25 / 50 / 100
  - Nút Previous / Next
  - Hiển thị tổng số bản ghi + range đang xem

- **Chọn nhiều ứng viên (checkbox selection)**

  - Chọn từng dòng
  - Chọn tất cả trong trang hiện tại
  - Hiển thị toolbar “đang chọn” + nút **Bỏ chọn**

- **Xoá nhiều ứng viên đã chọn**

  - Popup xác nhận (Confirm Modal)
  - Xoá theo danh sách id trong `localStorage`
  - Hiển thị toast sau khi thao tác

- **Popup thêm/sửa ứng viên**

  - Load HTML modal từ `components/candidate-modal.html` vào `#modalMount`
  - Validate cơ bản (họ tên, ngày ứng tuyển, email, số điện thoại)
  - Lưu vào `localStorage` và phát event `candidates:changed` để reload danh sách

- **Cột “Phù hợp với chân dung”**

  - Dữ liệu `personaFit` dùng thang **1–100 (%)**
  - Hiển thị dạng pill % với **3 mức màu**:
    - > = 70: xanh
    - > = 40: cam
    - < 40: đỏ

- **Icon toolbar**
  - Dùng CSS mask từ sprite `assets/icons/ICON.svg` (các class như `icon-email`, `icon-tag`, ...)
