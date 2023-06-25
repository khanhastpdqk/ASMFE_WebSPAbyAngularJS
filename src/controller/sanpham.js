window.sanpham = function ($rootScope, $scope, $http, $routeParams) {
  $rootScope.listsp = [];
  $scope.form = {
    id: "",
    ten: "",
    hang: "",
    loai: "",
    anh: "",
    giacu: "",
    giamoi: "",
  };
  $http.get(sanphamApi).then(function (response) {
    if (response.status === 200) {
      $rootScope.listsp = response.data;
    }
  });
  $scope.chitiet = function (event, index) {
    event.preventDefault();
    var list = $scope.listsp[index];
    var api = sanphamApi + "/" + list.id;
    $http.get(api).then(function (response) {
      $scope.form = response.data;
    });
  };
  $scope.xoa = function (event, index) {
    event.preventDefault();
    var list = $scope.listsp[index];
    var api = sanphamApi + "/" + list.id;
    $http.delete(api).then(function (response) {
      $scope.listsp = response.data;
    });
  };
  $scope.them = function (event) {
    event.preventDefault();
    $http.post(sanphamApi, $scope.form).then(function (response) {
      $scope.listsp = response.data;
    });
  };
  $scope.sua = function (event) {
    event.preventDefault();
    var api = sanphamApi + "/" + $scope.form.id;
    $http.put(api, $scope.form).then(function (response) {
      $scope.listsp = response.data;
    });
  };
  $scope.detailSP = function (index) {
    console.log("haizz");
    $rootScope.spa = {
      id: $rootScope.listsp[index].id,
      ten: $rootScope.listsp[index].ten,
      hang: $rootScope.listsp[index].hang,
      loai: $rootScope.listsp[index].loai,
      anh: $rootScope.listsp[index].anh,
      giacu: $rootScope.listsp[index].giacu,
      giamoi: $rootScope.listsp[index].giamoi,
    };
    window.scrollTo(0, 0);
  };
  $scope.categorySP = function (event, index) {
    $rootScope.listsp = [];
    event.preventDefault();
    $http.get(sanphamApi).then(function (response) {
      for (var i = 0; i < response.data.length; i++) {
        if (parseInt(response.data[i].loai) === index) {
          $rootScope.listsp.push(response.data[i]);
        }
      }
    });
  };
  $scope.listloai = [];
  $scope.formloai = {
    id: "",
    ten: "",
  };
  $http.get(loaiApi).then(function (response) {
    if (response.status == 200) {
      $scope.listloai = response.data;
    }
  });
  $scope.chitietloai = function (event, index) {
    event.preventDefault();
    var list = $scope.listloai[index];
    var api = loaiApi + "/" + list.id;
    $http.get(api).then(function (response) {
      $scope.formloai = response.data;
    });
  };
  $scope.xoaloai = function (event, index) {
    event.preventDefault();
    var list = $scope.listloai[index];
    var api = loaiApi + "/" + list.id;
    $http.delete(api).then(function (response) {
      $scope.listloai = response.data;
    });
  };
  $scope.themloai = function (event) {
    event.preventDefault();
    $http.post(loaiApi, $scope.formloai).then(function (response) {
      $scope.listloai = response.data;
    });
  };
  $scope.sualoai = function (event) {
    event.preventDefault();
    var api = loaiApi + "/" + $scope.formloai.id;
    $http.put(api, $scope.formloai).then(function (response) {
      $scope.listloai = response.data;
    });
  };
  $rootScope.listgiohang = [];
  $scope.clickgiohang = function (event, index) {
    event.preventDefault();
    var list = $rootScope.listsp[index];
    for (var i = 0; i < $rootScope.listsp.length; i++) {
      if ($rootScope.listsp[i].id === list.id) {
        console.log($rootScope.listsp[i]);
        $http.post(giohangApi, $rootScope.listsp[i]).then(function (response) {
          alert("Đã thêm vào giỏ hàng");
          console.log(response.data);
          $rootScope.listgiohang = response.data;
        });
      }
    }
  };
  $http.get(giohangApi).then(function (response) {
    $rootScope.listgiohang = response.data;
  });
  $scope.cleargh = function (event, index) {
    event.preventDefault();
    var list = $rootScope.listgiohang[index];
    var api = giohangApi + "/" + list.id;
    console.log(index);
    $http.delete(api).then(function (response) {
      $rootScope.listgiohang = response.data;
      alert("Đã xóa khỏi giỏ hàng");
    });
  };
  $scope.muahang = function (event, index) {
    event.preventDefault();
    var list = $rootScope.listsp[index];
    var api = sanphamApi + "/" + list.id;
    $http.get(api).then(function (response) {
      alert(
        "Bạn đã mua SP: " +
          response.data.ten +
          " Với số tiền: " +
          response.data.giamoi +
          "$"
      );
    });
  };
  let sum = 0;
  $scope.muagiohang = function (event) {
    event.preventDefault();
    $http.get(giohangApi).then(function (response) {
      for (let i = 0; i < response.data.length; i++) {
        sum += parseInt(response.data[i].giamoi);
      }
      alert(
        "Bạn đã mua " +
          response.data.length +
          " SP với tổng giá là: " +
          sum +
          "$"
      );
    });
  };
};
