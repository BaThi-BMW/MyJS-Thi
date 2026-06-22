// Bước 1: Chọn các phần tử HTML cần thao tác thông qua ID
const title = document.getElementById("title");
const btnChange = document.getElementById("btnChange");
// Lấy thêm phần tử chứa (.card) để lát nữa đổi màu nền cho sinh động
const card = document.querySelector(".card"); 

// Bước 2: Lắng nghe sự kiện click trên nút bấm
btnChange.addEventListener("click", function() {
    
    // TODO 1: Đổi title thành "Học DOM thật vui!"
    title.textContent = "Học DOM thật vui!";
    
    // TODO 2: Đổi màu chữ của title sang màu xanh lá đậm
    title.style.color = "#15803d";
    
    // Thay đổi giao diện bổ sung: Đổi màu nền của hộp nội dung (card) sang màu xanh nhạt thành công
    if (card) {
        card.style.backgroundColor = "#f0fdf4";
        card.style.borderColor = "#bbf7d0";
    }
});