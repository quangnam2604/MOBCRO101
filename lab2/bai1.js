function processNumbers(a, b) {
    // Đảm bảo a luôn nhỏ hơn b
    if (a > b) {
        [a, b] = [b, a];
    }

    // Tính số lượng số chẵn và số lẻ
    let evenCount = 0, oddCount = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    // In kết quả
    console.log(`Số lượng số chẵn trong khoảng ${a} đến ${b}: ${evenCount}`);
    console.log(`Số lượng số lẻ trong khoảng ${a} đến ${b}: ${oddCount}`);

    // In các số từ 2 đến 10
    console.log("Các số từ 2 đến 10:");
    for (let i = 2; i <= 10; i++) {
        process.stdout.write(i + " ");
    }
    console.log();
}

// Gọi hàm ví dụ
processNumbers(3, 15);
