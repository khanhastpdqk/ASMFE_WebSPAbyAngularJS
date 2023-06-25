window.taikhoan = function ($scope, $http, $window) {
  $scope.formtk = {
    id: "",
    ten: "",
    email: "",
    pass: "",
  };

  $scope.add = function (event) {
    if (
      $scope.formtk.ten === "" ||
      $scope.formtk.email === "" ||
      $scope.formtk.pass === ""
    ) {
      alert("Không được để trống");
      return;
    } else if (checkpassword($scope.formtk.pass) === false) {
      alert("Sai định dạng mật khẩu (7-14 ký tự, ít nhất 1 số)");
      return;
    } else if (checkemail($scope.formtk.email) === false) {
      alert("Sai định dạng email");
      return;
    } else {
      event.preventDefault();
      $http.post(khachhangApi, $scope.formtk).then(function (response) {
        if (response.status === 200) {
          alert("Đăng ký thành công");
        }
      });
    }
  };
  var a = -1;
  $scope.signin = function (event) {
    event.preventDefault();
    $http.get(khachhangApi).then(function (response) {
      for (var i = 0; i < response.data.length; i++) {
        if (
          $scope.formtk.email === response.data[i].email &&
          $scope.formtk.pass === response.data[i].pass
        ) {
          a = 0;
          alert("Đăng nhập thành công");
          $window.location.href = "#taikhoan";
          console.log(response.data[i]);
          console.log(a);
        }
      }
      if (a === -1) {
        alert("Sai email hoặc mật khẩu");
        return;
      }
    });
  };
  $scope.form2 = {
    id: "",
    ten: "",
    email: "",
    pass: "",
  };
  $scope.doimk = function (event) {
    console.log($scope.formtk);
    $scope.form3 = {
      id: $scope.formtk.id,
      ten: $scope.formtk.ten,
      email: $scope.formtk.email,
      pass: $scope.form2.pass,
    };
    console.log($scope.form3);
    event.preventDefault();
    $http.get(khachhangApi).then(function (response) {
      for (var i = 0; i < response.data.length; i++) {
        if (
          $scope.formtk.email === response.data[i].email &&
          $scope.formtk.pass === response.data[i].pass
        ) {
          $http.put(khachhangApi + "/" + response.data[i].id, $scope.form3);
          a = 0;
          alert("Đổi mật khẩu thành công");
        }
      }
      if (a === -1) {
        alert("Sai email hoặc mật khẩu");
        return;
      }
    });
  };
};

function checkemail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function checkpassword(password) {
  return /^[A-Za-z]\w{7,14}$/.test(password);
}
