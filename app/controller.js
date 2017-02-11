angular.module('project').controller('mainController', function($scope, mainService) {

  var pages = ['default', 'view', 'find', 'update'];

  $scope.default = true;
  $scope.view = false;
  $scope.find = false;
  $scope.update = false;

  $scope.togglePage = function (clickedNavView) {
    pages.forEach(function(page) {
      if (page === clickedNavView) {
        $scope[page] = true;
      } else {
        $scope[page] = false;
      }
    })
  }

  $scope.saveUser = mainService.saveUser;

})
