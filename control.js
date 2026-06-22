// Khai báo biến điểm số ban đầu
let score = 7.2;

// TODO 1: dùng if...else if...else để in ra xếp loại
if (score >= 8.5) {
  console.log("Xếp loại: Giỏi");
} else if (score >= 7.0) {
  console.log("Xếp loại: Khá");
} else if (score >= 5.0) {
  console.log("Xếp loại: Trung bình");
} else {
  console.log("Xếp loại: Cần cố gắng");
}

// TODO 2: viết vòng for in các số từ 1 đến 5
console.log("In các số từ 1 đến 5 bằng vòng for:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// TODO 3: viết vòng for tính tổng từ 1 đến 5
let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i; // Cộng dồn i vào tổng sau mỗi vòng lặp
}
console.log("Tổng =", total); // Kết quả in ra: Tổng = 15