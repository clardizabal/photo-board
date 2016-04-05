angular.module('photoboard.upload', [])

.directive('fileread', [function () {
  return {
    scope: {
      fileread: '='
    },
    link: function (scope, element, attributes) {
      element.bind('change', function (changeEvent) {
        var reader = new FileReader();
        reader.onload = function (loadEvent) {
          scope.$apply(function () {
            scope.fileread = loadEvent.target.result;
          });
        };
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  };
}])

.controller('UploadController', function($scope, Photos) {
  console.log('SET UPLOAD CONTROLLER');
  $scope.photo = {};

  $scope.addPhoto = function() {
    // console.log('ADDING PHOTO: ', $scope.photo.file);
    console.log('ADDING PHOTO');
    Photos.addOne($scope.photo);
  };
});