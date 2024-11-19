const app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider) => {
    $routeProvider
    .when("/", {
        templateUrl: "./Views/home.html"
    })
    .when("/danhsach", {
        templateUrl: "./Views/SanPham/danhsach.html"
    })
    .when("/login", {
        templateUrl: "./Views/login.html"
    })
    .when("/loginotp", {
        templateUrl: "./Views/loginotp.html"
    })
    .when("/quenmatkhau", {
        templateUrl: "./Views/quenmatkhau.html"
    })
    .when("/nvlayout", {
        templateUrl: "./Views/layoutnhanvien.html"
    })
    .when("/thongke", {
        templateUrl: "./Views/thongke.html"
    })
    .when("/kmvoucher", {
        templateUrl: "./Views/khuyenmai_voucher.html"
    })
    .when("/Acount", {
        templateUrl: "./Views/layoutAcountAcc.html"
    })
    .when("/QuanLyHoaDon", {
        templateUrl: "./Views/HoaDon/QuanLyHoaDon.html"
    })
    .when("/BanHangTaiQuay", {
        templateUrl: "./Views/HoaDon/BanHangTaiQuay.html",
        controller: "BanHangTaiQuayController"
    })    
    .otherwise({
        redirectTo: "/"
    });
});
app.controller("BanHangTaiQuayController", function($scope) {
    $scope.danhSachSanPham = [
        { id: 1, ten: "Giày Thể Thao ABC", gia: 750000 },
        { id: 2, ten: "Giày Thể Thao XYZ", gia: 650000 },
        { id: 2, ten: "Giày Thể Thao XYZ", gia: 650000 },
        { id: 2, ten: "Giày Thể Thao XYZ", gia: 650000 },
        { id: 2, ten: "Giày Thể Thao XYZ", gia: 650000 },
        { id: 2, ten: "Giày Thể Thao XYZ", gia: 650000 },
        { id: 2, ten: "Giày Thể Thao XYZ", gia: 650000 },
        { id: 2, ten: "Giày Thể Thao XYZ", gia: 650000 },
        { id: 2, ten: "Giày Thể Thao XYZ", gia: 650000 },
        { id: 2, ten: "Giày Thể Thao XYZ", gia: 650000 },
        { id: 2, ten: "Giày Thể Thao XYZ", gia: 650000 },
        { id: 2, ten: "Giày Thể Thao XYZ", gia: 650000 },
        { id: 2, ten: "Giày Thể Thao XYZ", gia: 650000 },
        { id: 2, ten: "Giày Thể Thao XYZ", gia: 650000 },
        { id: 2, ten: "Giày Thể Thao XYZ", gia: 650000 },
        { id: 2, ten: "Giày Thể Thao XYZ", gia: 650000 },
        { id: 2, ten: "Giày Thể Thao XYZ", gia: 650000 },
        { id: 2, ten: "Giày Thể Thao XYZ", gia: 650000 },
        { id: 3, ten: "Giày Chạy Bộ DEF", gia: 800000 }
    ];

    $scope.hoaDons = [];
    $scope.maxHoaDons = 5;
    $scope.selectedHoaDonIndex = 0;

    $scope.taoHoaDonMoi = function() {
        if ($scope.hoaDons.length < $scope.maxHoaDons) {
            $scope.hoaDons.push({
                sanPham: [],
                voucher: "",
                tongTien: 0,
                customerName: "",
                paymentMethod: ""
            });
            $scope.selectedHoaDonIndex = $scope.hoaDons.length - 1;
        } else {
            alert("Đã đạt số lượng hóa đơn tối đa!");
        }
    };

    $scope.chonHoaDon = function(index) {
        $scope.selectedHoaDonIndex = index;
    };

    $scope.tinhTongTien = function(hoaDon) {
        hoaDon.tongTien = hoaDon.sanPham.reduce((sum, sp) => sum + (sp.gia * sp.soLuong), 0);
    };

    $scope.themSanPham = function(hoaDon, sanPham) {
        const sp = angular.copy(sanPham);
        sp.soLuong = 1;
        sp.thanhTien = sp.gia;
        hoaDon.sanPham.push(sp);
        $scope.tinhTongTien(hoaDon);
    };

    $scope.capNhatThanhTien = function(hoaDon, sanPham) {
        sanPham.thanhTien = sanPham.gia * sanPham.soLuong;
        $scope.tinhTongTien(hoaDon);
    };

    $scope.xoaSanPham = function(hoaDon, sanPham) {
        const index = hoaDon.sanPham.indexOf(sanPham);
        if (index > -1) {
            hoaDon.sanPham.splice(index, 1);
            $scope.tinhTongTien(hoaDon);
        }
    };
});
