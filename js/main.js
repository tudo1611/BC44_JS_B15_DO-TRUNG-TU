//Bài 1: Quản lý tuyển sinh
document.getElementById("btnKetQua").onclick = function () {
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = document.getElementById("doiTuong").value * 1;
  var diemMonThu1 = document.getElementById("diemMonThu1").value * 1;
  var diemMonThu2 = document.getElementById("diemMonThu2").value * 1;
  var diemMonThu3 = document.getElementById("diemMonThu3").value * 1;
  // progress
  if (khuVuc == "A") {
    khuVuc = 2;
  } else if (khuVuc == "B") {
    khuVuc = 1;
  } else if (khuVuc == "C") {
    khuVuc = 0.5;
  } else {
    khuVuc = 0;
  }
  if (doiTuong == 1) {
    doiTuong = 2.5;
  } else if (doiTuong == 2) {
    doiTuong = 1.5;
  } else if (doiTuong == 3) {
    doiTuong = 1;
  } else {
    doiTuong = 0;
  }
  var ketQua = 0;
  ketQua = diemMonThu1 + diemMonThu2 + diemMonThu3 + Number(khuVuc) + doiTuong;
  if (diemMonThu1 == 0 || diemMonThu2 == 0 || diemMonThu3 == 0) {
    document.getElementById("ketQua").innerHTML =
      "Bạn đã rớt. Do có 1 môn điểm 0";
  } else if (ketQua >= diemChuan) {
    document.getElementById("ketQua").innerHTML =
      "Tổng điểm: " + ketQua + " - Bạn đã đậu";
  } else {
    document.getElementById("ketQua").innerHTML =
      "Tổng điểm: " + ketQua + " - Bạn đã rớt";
  }
};

//Bài 2: Tính tiền điện

document.getElementById("btnTinhTienDien").onclick = function () {
  var hoTen = document.getElementById("hoTen").value;
  var soKw = document.getElementById("soKw").value * 1;
  var ketQuaBai2 = 0;

  if (0 <= soKw && soKw <= 50) {
    ketQuaBai2 = 500 * soKw;
  } else if (50 < soKw && soKw <= 100) {
    ketQuaBai2 = 500 * 50 + 650 * (soKw - 50);
  } else if (100 < soKw && soKw <= 200) {
    ketQuaBai2 = 500 * 50 + 650 * 50 + 850 * (soKw - 100);
  } else if (200 < soKw && soKw <= 350) {
    ketQuaBai2 = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (soKw - 200);
  } else {
    ketQuaBai2 =
      500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (soKw - 350);
  }
  document.getElementById("ketQuaBai2").innerHTML =
    "Họ và tên: " + hoTen + "; Tiền điện: " + ketQuaBai2.toLocaleString();
};

//Bài 3: Tính thuế thu nhập cá nhân

document.getElementById("btnTinhTienThue").onclick = function () {
  var hoVaTen = document.getElementById("hoVaTen").value;
  var thuNhapNam = document.getElementById("thuNhapNam").value * 1;
  var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  var tienThue = 0;
  var thuNhapChiuThue = thuNhapNam - 4e6 - soNguoiPhuThuoc * 1.6e6;

  if (thuNhapChiuThue >= 0 && thuNhapChiuThue <= 60e6) {
    tienThue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60e6 && thuNhapChiuThue <= 120e6) {
    tienThue = 60e6 * 0.05 + (thuNhapChiuThue - 60e6) * 0.1;
  } else if (thuNhapChiuThue > 120e6 && thuNhapChiuThue <= 210e6) {
    tienThue = 60e6 * 0.05 + 60e6 * 0.1 + (thuNhapChiuThue - 120e6) * 0.15;
  } else if (thuNhapChiuThue > 210e6 && thuNhapChiuThue <= 384e6) {
    tienThue =
      60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + (thuNhapChiuThue - 210e6) * 0.2;
  } else if (thuNhapChiuThue > 384e6 && thuNhapChiuThue <= 624e6) {
    tienThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      (thuNhapChiuThue - 624e6) * 0.25;
  } else if (thuNhapChiuThue > 624e6 && thuNhapChiuThue <= 960e6) {
    tienThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      (thuNhapChiuThue - 624e6) * 0.3;
  } else {
    tienThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      336e6 * 0.3 +
      (thuNhapChiuThue - 960e6) * 0.35;
  }
  document.getElementById("ketQuaBai3").innerHTML =
    "Họ tên: " +
    hoVaTen +
    "; Tiền thuế thu nhập cá nhân: " +
    tienThue.toLocaleString();
};

//Bài 4: Tính tiền cáp

function myFunction() {
  var nhaDan = document.getElementById("nhaDan").value;
  var x = document.getElementById("mySelect").value;
  var soKetNoi = document.getElementById("soKetNoi");
  if (x == nhaDan) {
    soKetNoi.style.display = "none";
  } else {
    soKetNoi.style.display = "block";
  }
}

document.getElementById("btnTinhTienCap").onclick = function () {
  var doanhNghiep = document.getElementById("doanhNghiep").value;
  var maKhachHang = document.getElementById("maKhachHang").value;
  var soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
  var soKetNoi = document.getElementById("soKetNoi").value * 1;
  var loaiKhachHang = document.getElementById("mySelect").value;
  var nhaDan = document.getElementById("nhaDan").value;
  var tienCap = 0;

  if (loaiKhachHang == nhaDan) {
    tienCap = 25 + 7.5 * soKenhCaoCap;
  } else if (loaiKhachHang = doanhNghiep){
    if (soKetNoi <= 10) {
      tienCap = 90 + 50 * soKenhCaoCap;
    } else {
      tienCap = 90 + 5 * (soKetNoi - 10) + 50 * soKenhCaoCap;
    }
  } 
  document.getElementById("ketQuaBai4").innerHTML =
    "Mã khách hàng: " + maKhachHang + "; Tiền cáp: " + tienCap.toLocaleString() + "$";
};
