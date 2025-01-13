const data = [
    { code: 'P001', name: 'Lipstick', price: 200, quantity: 50 },
    { code: 'P002', name: 'Eyeliner', price: 150, quantity: 30 },
    { code: null, name: 'Foundation', price: 300, quantity: 20 },
    { code: 'P004', name: null, price: 100, quantity: 0 },
    undefined,
    null,
    { code: 'P005', name: 'Mascara', price: 250, quantity: 15 },
  ];
  
  // 1. Hàm chuyển đổi từ array sang object
  function convertArrayToObject(array) {
    // Loại bỏ các phần tử không hợp lệ
    const filteredArray = array.filter(
      (item) => item && item.code && item.name // Bỏ qua null, undefined, hoặc thiếu code/name
    );
  
    // Chuyển đổi mảng thành object
    return Object.fromEntries(filteredArray.map((item) => [item.code, item]));
  }
  
  // 2. Sử dụng hàm
  const productObject = convertArrayToObject(data);
  
  // 3. Xuất kết quả
  console.log('Dữ liệu đã chuyển đổi:');
  console.log(productObject);
  
  // 4. Tìm kiếm sản phẩm bằng mã code
  function findProductByCode(object, code) {
    return object[code] || 'Sản phẩm không tồn tại';
  }
  
  console.log('Tìm kiếm sản phẩm với mã P002:');
  console.log(findProductByCode(productObject, 'P002'));
  
  console.log('Tìm kiếm sản phẩm với mã P006:');
  console.log(findProductByCode(productObject, 'P006'));
  