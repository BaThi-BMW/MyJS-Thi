// ========================================================
// 1. CLICK EVENT: Bấm nút → Đổi chữ thông báo
// ========================================================
const btnClick = document.getElementById('btnClick');
const clickResult = document.getElementById('clickResult');

btnClick.addEventListener('click', function() {
    clickResult.textContent = "🎉 Tuyệt vời! Bạn vừa kích hoạt sự kiện click thành công.";
    clickResult.style.color = "#16a34a"; // Đổi chữ thành màu xanh lá
});


// ========================================================
// 2. CHANGE EVENT: Chọn màu từ dropdown → Đổi màu chữ của thẻ p
// ========================================================
const colorSelect = document.getElementById('colorSelect');
const changeResult = document.getElementById('changeResult');

colorSelect.addEventListener('change', function() {
    // Lấy giá trị màu sắc (value) của option đang được chọn
    const selectedColor = colorSelect.value;
    // Thay đổi style color của phần tử hiển thị kết quả
    changeResult.style.color = selectedColor;
});


// ========================================================
// 3. KEYUP EVENT: Người dùng gõ tên → Hiển thị xem trước ngay lập tức
// ========================================================
const nameInput = document.getElementById('nameInput');
const keyupResult = document.getElementById('keyupResult');

nameInput.addEventListener('keyup', function() {
    const value = nameInput.value.trim();
    
    if (value === "") {
        keyupResult.textContent = "...";
    } else {
        keyupResult.textContent = value;
    }
});


// ========================================================
// 4. SUBMIT EVENT: Gửi form → Chặn hành vi tải lại trang (preventDefault)
// ========================================================
const sampleForm = document.getElementById('sampleForm');
const emailInput = document.getElementById('emailInput');
const submitResult = document.getElementById('submitResult');

sampleForm.addEventListener('submit', function(event) {
    // CHẶN MẶC ĐỊNH: Tránh việc trình duyệt reload lại trang web
    event.preventDefault();

    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        submitResult.textContent = "❌ Lỗi: Vui lòng không bỏ trống email!";
        submitResult.style.color = "#ef4444";
    } else {
        submitResult.textContent = `🚀 Đăng ký thành công cho email: ${emailValue}`;
        submitResult.style.color = "#16a34a";
        emailInput.value = ""; // Xóa dữ liệu cũ trong input sau khi gửi thành công
    }
});