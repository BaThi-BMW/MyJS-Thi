document.getElementById('btnRun').addEventListener('click', function() {
    let outputText = ""; // Biến trung gian để tích lũy kết quả hiển thị ra màn hình

    // ==========================================
    // TODO 1: dùng if...else if...else để in ra xếp loại
    // ==========================================
    let score = 7.2;
    let rank = "";

    if (score >= 8.5) {
        rank = "Giỏi";
    } else if (score >= 7.0) {
        rank = "Khá";
    } else if (score >= 5.0) {
        rank = "Trung bình";
    } else {
        rank = "Yếu";
    }

    console.log(`Điểm: ${score} => Xếp loại: ${rank}`);
    outputText += `📝 Điểm: ${score} => Xếp loại: ${rank}\n\n`;


    // ==========================================
    // TODO 2: viết vòng for in các số từ 1 đến 5
    // ==========================================
    console.log("In các số từ 1 đến 5 bằng vòng for:");
    outputText += "🔄 In các số từ 1 đến 5 bằng vòng for:\n";

    for (let i = 1; i <= 5; i++) {
        console.log(i);
        outputText += `${i} `;
    }
    outputText += "\n\n";


    // ==========================================
    // TODO 3: viết vòng for tính tổng từ 1 đến 5
    // ==========================================
    let total = 0;
    for (let i = 1; i <= 5; i++) {
        total += i; // Cộng dồn i vào biến total
    }

    console.log("Tổng =", total);
    outputText += `📊 Tổng các số từ 1 đến 5 là: = ${total}`;


    // Cập nhật toàn bộ kết quả thu được lên giao diện trang web
    document.getElementById('outputConsole').innerHTML = outputText;
});