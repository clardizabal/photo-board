angular.module('photoboard.board', [])

.controller('BoardController', function($scope, Photos) {
  $scope.data = {};

  console.log('BOARD CONTROLLER');

  // Photos.getAll().then(function(photos) {
  //   console.log(photos);
  // });
});