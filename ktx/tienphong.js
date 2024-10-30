// Lấy tham chiếu đến các phần tử HTML
const tenInput = document.getElementById("ten");
const msvInput = document.getElementById("msv");
const tienInput = document.getElementById("tien");
const addButton = document.querySelector("button[type='submit']");
const tableBody = document.querySelector("table tbody");

// Hàm thêm hóa đơn mới
function addInvoice() {
    const ten = tenInput.value.trim();
    const msv = msvInput.value.trim();
    const tien = tienInput.value.trim();

    // Kiểm tra dữ liệu nhập vào
    if (ten === "" || msv === "" || tien === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Tạo hàng mới cho hóa đơn
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${ten}</td>
        <td>${msv}</td>
        <td>${tien} VND</td>
        <td>${new Date().toLocaleDateString()}</td>
        <td><button onclick="toggleStatus(this)">Chưa thanh toán</button></td>
        <td><button onclick="deleteRow(this)">Xóa</button></td>
    `;

    tableBody.appendChild(newRow);

    // Xóa dữ liệu nhập sau khi thêm
    tenInput.value = "";
    msvInput.value = "";
    tienInput.value = "";
}

// Hàm cập nhật trạng thái thanh toán
function toggleStatus(button) {
    button.innerText = button.innerText === "Đã thanh toán" ? "Chưa thanh toán" : "Đã thanh toán";
    button.classList.toggle("paid"); // Thêm lớp để thay đổi giao diện nếu cần
}

// Hàm xóa hàng hóa đơn
function deleteRow(button) {
    const row = button.parentNode.parentNode;
    tableBody.removeChild(row);
}

// Gán sự kiện cho nút Thêm
addButton.addEventListener("click", addInvoice);
