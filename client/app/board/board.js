angular.module('photoboard.board', [])

.controller('BoardController', function($scope, Photos) {
  $scope.data = {};

  Photos.getImages().then(function(photos) {
    console.log(photos);
  });
});