angular.module('project').controller('mainController', function($scope) {

  var pages = ['view', 'find', 'update'];

  $scope.view = true;
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
})
