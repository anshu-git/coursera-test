(function () {
'use strict';

angular.module('assignment1', [])

.controller('LunchCheckController', function ($scope) {
$scope.lunch_menu ="";
$scope.checkDiet = function () {
  var items=$scope.lunch_menu.split(',');
  if (items.length==1 && items[0]==='') {
    $scope.message="Please enter data first";
  } else if(items.length<=3) {
      $scope.message="Enjoy!";
  }
  else {
    $scope.message="Too much!"
  }
};
});

})();
