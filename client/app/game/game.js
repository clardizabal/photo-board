angular.module('photoboard.game', [])

.controller('GameController', function($scope, Photos) {
  $scope.data = {};
  $scope.randomSix = [];
  $scope.count = 0;
  $scope.flipOne;
  $scope.flipTwo;
  var OFFSET = 3;

  $scope.showDelete = function(itemStatus) {
    var testStatus = ["New", "Completed"];

    if(testStatus.indexOf(itemStatus) > -1) { //test the Status
      return true;
    }
    return false;
  };

  var resetShow = function(indexA, indexB) {
    $scope.randomSix[indexA].showme = false;
    $scope.randomSix[indexB].showme = false;
    // console.log($scope.randomSix);
  };

  $scope.incrementCount = function() {
    $scope.count++;
    if ($scope.count === 1) {
      $scope.flipOne = this.$id - OFFSET;
    } else if ($scope.count % 2 === 0) {
      $scope.flipTwo = this.$id - OFFSET;
    } else if ($scope.count % 2 === 1) {
      resetShow($scope.flipOne, $scope.flipTwo);
      $scope.flipOne = this.$id - OFFSET;
    }
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
    $scope.data.photos = photos;
    var photoBucket = photos.slice(0);

    for (var i = 0; i < 6; i++) {
      var randomIndex = Math.floor(Math.random() * photoBucket.length);
      photoBucket[randomIndex].status = true;
      $scope.randomSix.push(angular.copy(photoBucket[randomIndex]));
      $scope.randomSix.push(angular.copy(photoBucket[randomIndex]));
      photoBucket.splice(randomIndex, 1);
    }
    $scope.randomSix = shuffle($scope.randomSix);
  });

});