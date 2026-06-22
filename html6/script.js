// --- 1. XỬ LÝ CHỨC NĂNG ẨN/HIỆN NỘI DUNG ---
const btnToggle = document.getElementById('btnToggle');
const descText = document.getElementById('descText');

btnToggle.addEventListener('click', function() {
    // Sử dụng classList.toggle để bật/tắt class 'show' trong CSS
    descText.classList.toggle('show');
    
    // Đổi chữ trên nút bấm tương ứng với trạng thái đóng/mở
    if (descText.classList.contains('show')) {
        btnToggle.textContent = "Ẩn bớt chi tiết";
    } else {
        btnToggle.textContent = "Xem thêm chi tiết";
    }
});


// --- 2. XỬ LÝ VALIDATE FORM LIÊN HỆ ---
const contactForm = document.getElementById('contactForm');
const fullName = document.getElementById('fullName');
const message = document.getElementById('message');

contactForm.addEventListener('submit', function(event) {
    // Chặn hành vi tải lại trang (reload) mặc định của Form
    event.preventDefault();
    
    // Lấy giá trị và cắt bỏ khoảng trắng thừa ở hai đầu đầu/cuối
    const nameValue = fullName.value.trim();

    // Kiểm tra dữ liệu rỗng
    if (nameValue === '') {
        message.textContent = '❌ Vui lòng nhập họ tên, không được để trống!';
        message.style.color = '#ef4444'; // Màu đỏ cảnh báo
    } else {
        message.textContent = `🎉 Chào ${nameValue}! Dữ liệu của bạn hợp lệ và đã gửi thành công.`;
        message.style.color = '#16a34a'; // Màu xanh thành công
        
        // Reset lại ô nhập liệu sau khi gửi thành công
        fullName.value = '';
    }
});