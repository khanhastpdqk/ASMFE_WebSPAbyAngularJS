window.laysp = function ($rootScope, $routeParams, $scope) {
  for (var i = 0; i < $rootScope.listsp.length; i++) {
    if ($routeParams.id === $rootScope.listsp[i].id) {
      $scope.sp = {
        id: $rootScope.listsp.id,
        ten: $rootScope.listsp.ten,
        hang: $rootScope.listsp.hang,
        loai: $rootScope.listsp.loai,
        anh: $rootScope.listsp.anh,
        giacu: $rootScope.listsp.giacu,
        giamoi: $rootScope.listsp.giamoi,
      };
    }
  }
};
