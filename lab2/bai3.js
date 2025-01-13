const class1 = [
  {
    mssv: 'PS0000',
    name: 'Nguyen Van A',
    avgPoint: 8.9,
    avgTraningPoint: 7,
    status: 'pass',
  },
  {
    mssv: 'PS0001',
    name: 'Nguyen Van B',
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: 'pass',
  },
];

const class2 = [
  {
    mssv: 'PS0002',
    name: 'Nguyen Van C',
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: 'failed',
  },
  {
    mssv: 'PS0003',
    name: 'Nguyen Van D',
    avgPoint: 10,
    avgTraningPoint: 10,
    status: 'pass',
  },
  {
    mssv: 'PS0004',
    name: 'Nguyen Van E',
    avgPoint: 10,
    avgTraningPoint: 2,
    status: 'pass',
  },
];

// 1. Gộp danh sách sinh viên từ các lớp
const allStudents = class1.concat(class2);

// 2. Loại bỏ sinh viên có status là "failed"
const eligibleStudents = allStudents.filter(student => student.status === 'pass');

// 3. Sắp xếp danh sách theo avgPoint từ cao xuống thấp
const sortedByAvgPoint = [...eligibleStudents].sort((a, b) => b.avgPoint - a.avgPoint);

// 4. Sắp xếp danh sách theo avgTraningPoint từ cao xuống thấp
const sortedByTrainingPoint = [...eligibleStudents].sort((a, b) => b.avgTraningPoint - a.avgTraningPoint);

// 5. Lấy thông tin Ong vàng
const goldenBee = sortedByAvgPoint[0];

// 6. Xuất kết quả
console.log('Danh sách sinh viên theo điểm số từ cao xuống thấp:');
console.table(sortedByAvgPoint);

console.log('Danh sách sinh viên theo điểm rèn luyện từ cao xuống thấp:');
console.table(sortedByTrainingPoint);

console.log('Thông tin Ong vàng:');
console.log(goldenBee);
