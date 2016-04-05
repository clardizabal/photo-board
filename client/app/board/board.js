angular.module('photoboard.board', [])

.controller('BoardController', function($scope, $location,Photos, Auth) {
  $scope.data = {};

  console.log('BOARD CONTROLLER');

  if (!Auth.isAuth()) {
    $location.path('/signin');
  }

  $scope.logout = function() {
    console.log('SIGN OUT');
    Auth.signout();
  };

  Photos.getAll().then(function(photos) {
    // console.log(photos);
    $scope.data.photos = photos;
  });
});