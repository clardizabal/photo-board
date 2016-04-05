angular.module('photoboard.upload', [])

.directive('fileread', [function () {
  return {
    scope: {
      fileread: '='
    },
    link: function (scope, element, attributes) {
      element.bind('change', function (changeEvent) {

        // CODE TO UPLOAD ONE FILE AT A TIME
        // var reader = new FileReader();
        // reader.onload = function (loadEvent) {
        //   scope.$apply(function () {
        //     scope.fileread = loadEvent.target.result;
        //   });
        // };
        // reader.readAsDataURL(changeEvent.target.files[0]);

        // CODE TO UPLOAD MULTIPLE FILES
        var readers = [];
        var files = changeEvent.target.files;
        var data = [];

        for (var i = 0; i < files.length; i++) {
          readers[i] = new FileReader();
          readers[i].onload = function (loadEvent) {
            data.push(loadEvent.target.result);
            if ( data.length === files.length ){
              scope.$apply(function () {
                scope.fileread = data;
              });
            }
          };
          readers[i].readAsDataURL( files[i] );
        }
      });
    }
  };
}])

.controller('UploadController', function($scope, Photos) {
  console.log('SET UPLOAD CONTROLLER');
  $scope.photo = {};

  $scope.addPhoto = function() {
    console.log('ADDING PHOTO');
    Photos.addOne($scope.photo);
  };


});