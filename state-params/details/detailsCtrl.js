angular.module('app')
.controller('detailsCtrl', function($scope, $stateParams, mainService) {

$scope.user;

let users = mainService.getUserData()
for (var i = 0; i < users.length; i++) {
  if(users[i].id === parseInt($stateParams.id)){
    $scope.user = users[i];
  }
 }




})
