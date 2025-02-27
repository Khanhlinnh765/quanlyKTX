// Lấy các phần tử từ DOM
const spInput = document.getElementById("sp");
const slInput = document.getElementById("sl");
const ttInput = document.getElementById("tt");
const button = document.querySelector("button");
const tableBody = document.querySelector("tbody");

// Hàm thêm sinh viên vào phòng
function addStudentToRoom() {
    const roomNumber = spInput.value;
    const additionalStudents = parseInt(slInput.value);

    // Kiểm tra điều kiện
    if (roomNumber === "" || isNaN(additionalStudents) || additionalStudents <= 0) {
        alert("Vui lòng điền đầy đủ thông tin hợp lệ!");
        return;
    }

    // Tìm hàng tương ứng với số phòng
    const rows = tableBody.getElementsByTagName("tr");
    let roomFound = false;

    for (let row of rows) {
        const roomCell = row.cells[0];
        const currentStudentsCell = row.cells[1];
        const statusCell = row.cells[2];

        // Kiểm tra số phòng
        if (roomCell.textContent === roomNumber) {
            roomFound = true;
            const currentStudents = parseInt(currentStudentsCell.textContent.split("/")[0]); // Lấy số lượng hiện tại

            // Kiểm tra xem phòng đã đầy chưa
            if (currentStudents >= 4) {
                alert("Phòng đã đầy, không thể thêm sinh viên!");
                return; // Ngừng hàm nếu phòng đã đầy
            }

            // Cập nhật số lượng sinh viên
            const newStudentCount = currentStudents + additionalStudents;
            currentStudentsCell.textContent = `${newStudentCount}/4`;

            // Cập nhật trạng thái
            if (newStudentCount >= 4) {
                statusCell.textContent = "Đã Đầy";
            } else {
                statusCell.textContent = "Còn Trống";
            }

            // Thoát khỏi vòng lặp khi đã tìm thấy phòng
            break;
        }
    }

    // Nếu không tìm thấy phòng
    if (!roomFound) {
        alert("Số phòng không tồn tại!");
    }

    // Xóa giá trị trong các ô input
    spInput.value = "";
    slInput.value = "";
}

// Thêm sự kiện click cho nút
button.addEventListener("click", addStudentToRoom);
