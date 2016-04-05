angular.module('photoboard.upload', [])

.controller('UploadController', function($scope, Photos) {
  console.log('SET UPLOAD CONTROLLER');
  $scope.photo = {};

  $scope.addPhoto = function() {
    console.log('ADDING PHOTO: ', $scope.photo.path);
    Photos.addOne($scope.photo);
  };
});