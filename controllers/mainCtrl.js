app.controller('mainCtrl', function($scope, listService, keyService) {

  $scope.getProductionData = function() {
    var key = keyService.getKey();
    listService.getProductionData(key)
      .then(function(result) {
        $scope.idArray = [];
        for (var i = 0; i < result.length; i++) {
          $scope.idArray.push(result[i].id);
        }
      })
  };

  $scope.getProductionData();

})
