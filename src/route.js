var myApp = angular.module("myApp", ["ngRoute"]);
//chuyen trang
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");

  $routeProvider
    .when("/home", {
      templateUrl: "./pages/home.html",
      controller: sanpham,
    })
    .when("/gioithieu", {
      templateUrl: "./pages/gioithieu.html",
    })
    .when("/sp", {
      templateUrl: "./pages/sp.html",
      controller: sanpham,
    })
    .when("/sp/dt/:id", {
      templateUrl: "./pages/sp.html",
      controller: sanpham,
    })
    .when("/damua", {
      templateUrl: "./pages/damua.html",
    })
    .when("/dangky", {
      templateUrl: "./pages/dangky.html",
      controller: taikhoan,
    })
    .when("/dangnhap", {
      templateUrl: "./pages/dangnhap.html",
      controller: taikhoan,
    })
    .when("/doimk", {
      templateUrl: "./pages/doimk.html",
      controller: taikhoan,
    })
    .when("/sukien", {
      templateUrl: "./pages/sukien.html",
    })
    .when("/taikhoan", {
      templateUrl: "./pages/taikhoan.html",
      controller: sanpham,
    })
    .when("/giohang", {
      templateUrl: "./pages/giohang.html",
      controller: sanpham,
    })
    .when("/sp1/:id", {
      templateUrl: "./pages/sp1.html",
      controller: sanpham,
    })
    .otherwise({
      redirectTo: "/home",
    });
});
