document.getElementById('quizForm').addEventListener('submit', function(event) {
    // Chặn hành vi tải lại trang mặc định của form
    event.preventDefault();

    let score = 0;
    const totalQuestions = 3;

    // Duyệt qua từng câu hỏi từ q1 đến q3
    for (let i = 1; i <= totalQuestions; i++) {
        // Lấy tùy chọn được người dùng tích vào
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        const expBox = document.getElementById(`exp${i}`);

        // Hiện phần giải thích cho từng câu
        if (expBox) {
            expBox.style.display = 'block';
        }

        // Kiểm tra xem đáp án có chính xác không
        if (selected && selected.value === 'correct') {
            score++;
        }
    }

    // Hiển thị kết quả tổng quan
    const resultBox = document.getElementById('resultMessage');
    if (score === totalQuestions) {
        resultBox.textContent = `🎉 Tuyệt vời! Bạn đúng ${score}/${totalQuestions} câu.`;
        resultBox.style.color = '#16a34a'; // Màu xanh lá thành công
    } else {
        resultBox.textContent = `✍️ Bạn đúng ${score}/${totalQuestions} câu. Hãy xem phần giải thích bên dưới để ôn lại nhé!`;
        resultBox.style.color = '#ea580c'; // Màu cam cần cố gắng
    }
});