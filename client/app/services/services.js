angular.module('photoboard.services', [])

.factory('Photos', function($http) {
  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/photos'
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  var addOne = function(filePath) {
    console.log('POST REQUEST: ', filePath);
    return $http({
      method: 'POST',
      url: '/api/photos',
      data: filePath
    })
    .then(function(resp) {
      return resp;
    });
  };

  return {getAll: getAll, addOne: addOne};
})
.factory('Auth', function($http, $location, $window) {
  var signin = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function(resp) {
      return resp.data.token;
    });
  };

  var signup = function(user) {
    console.log('MAKING POST REQUEST');
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function(resp) {
      return resp.data.token;
    });
  };

  var isAuth = function() {
    return !!$window.localStorage.getItem('com.photoboard');
  };

  var signout = function() {
    $window.localStorage.removeItem('com.photoboard');
    $location.path('/signin');
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});