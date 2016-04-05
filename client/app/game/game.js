angular.module('photoboard.game', [])

.controller('GameController', function($scope, Photos) {
  $scope.data = {};
  $scope.randomSix = [];

  $scope.showDelete = function(itemStatus) {
    var testStatus = ["New", "Completed"];

    if(testStatus.indexOf(itemStatus) > -1) { //test the Status
      return true;
    }
    return false;
  };

  var shuffle = function(array) {
    var shuffledArray = array.slice();
    var len = shuffledArray.length;
    shuffledArray.forEach(function(value, key) {
      var random = Math.floor(Math.random() * len);
      var temp = shuffledArray[key];
      shuffledArray[key] = shuffledArray[random];
      shuffledArray[random] = temp;
    });
    return shuffledArray;
  };

  console.log('GAME CONTROLLER');

  Photos.getAll().then(function(photos) {
    // console.log(photos);
    $scope.data.photos = photos;
    var photoBucket = photos.slice(0);
    // console.log(photos);

    for (var i = 0; i < 6; i++) {
      var randomIndex = Math.floor(Math.random() * photoBucket.length);
      console.log(randomIndex);
      photoBucket[randomIndex].status = true;
      $scope.randomSix.push(photoBucket[randomIndex]);
      $scope.randomSix.push(photoBucket[randomIndex]);
      photoBucket.splice(randomIndex, 1);
    }
    // console.log($scope.randomSix);
    $scope.randomSix = shuffle($scope.randomSix);
  });

  // console.log($scope.data.photos);
});