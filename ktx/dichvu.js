document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("dichvu-form");
    const tableBody = document.querySelector("#dichvu-table tbody");
    const thongbao = document.getElementById("thongbao");
    const clearBtn = document.getElementById("clear-local-storage");

    // Hàm để thêm dữ liệu vào bảng
    function addData(phong, dien, nuoc) {
        const row = document.createElement("tr");
        const dienCost = dien * 1500;  // Giả sử giá điện là 1500 VND/kWh
        const nuocCost = nuoc * 12000; // Giả sử giá nước là 12000 VND/m³
        const dichvuCost = 100000;     // Giá dịch vụ cố định

        row.innerHTML = `
            <td contenteditable="true">${phong}</td>
            <td contenteditable="true">${dienCost.toLocaleString()}</td>
            <td contenteditable="true">${nuocCost.toLocaleString()}</td>
            <td contenteditable="true">${dichvuCost.toLocaleString()}</td>
            <td>${new Date().toLocaleDateString()}</td>
            <td contenteditable="true">Chưa thanh toán</td>
            <td><button class="delete-btn">Xóa</button></td>
        `;

        tableBody.appendChild(row);
        thongbao.textContent = "Dữ liệu đã được thêm thành công!";
        thongbao.classList.remove("hidden");

        setTimeout(() => {
            thongbao.classList.add("hidden");
        }, 2000);
    }

    // Xử lý khi form được submit
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const phong = document.getElementById("phong").value;
        const dien = parseFloat(document.getElementById("dien").value);
        const nuoc = parseFloat(document.getElementById("nuoc").value);

        if (phong && !isNaN(dien) && !isNaN(nuoc)) {
            addData(phong, dien, nuoc);
            form.reset();
        } else {
            thongbao.textContent = "Vui lòng nhập đầy đủ thông tin!";
            thongbao.classList.remove("hidden");
        }
    });

    // Xóa hàng dữ liệu
    tableBody.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            event.target.closest("tr").remove();
        }
    });

    // Xóa toàn bộ dữ liệu
    clearBtn.addEventListener("click", function () {
        tableBody.innerHTML = "";
        thongbao.textContent = "Tất cả dữ liệu đã bị xóa!";
        thongbao.classList.remove("hidden");

        setTimeout(() => {
            thongbao.classList.add("hidden");
        }, 2000);
    });
    // Hàm để xử lý sự kiện đăng xuất
document.addEventListener("DOMContentLoaded", function () {
    const logoutLink = document.getElementById("logout"); // Tìm nút đăng xuất

    if (logoutLink) {
        logoutLink.addEventListener("click", function (event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

            // Xác nhận đăng xuất
            const confirmLogout = confirm("Bạn có chắc chắn muốn đăng xuất không?");
            if (confirmLogout) {
                // Chuyển hướng về trang đăng nhập
                window.location.href = "index.html"; 
            }
        });
    }
});
   // Hàm để xử lý sự kiện đăng xuất
document.addEventListener("DOMContentLoaded", function () {
    const logoutLink = document.getElementById("logout"); // Tìm nút đăng xuất

    if (logoutLink) {
        logoutLink.addEventListener("click", function (event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

            // Xác nhận đăng xuất
            const confirmLogout = confirm("Bạn có chắc chắn muốn đăng xuất không?");
            if (confirmLogout) {
                // Chuyển hướng về trang đăng nhập
                window.location.href = "index.html"; 
            }
        });
    }
});
s
});
