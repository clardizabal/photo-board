angular.module('photoboard', [
  'photoboard.services',
  'photoboard.auth',
  'photoboard.board',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      // templateUrl: 'app/auth/signin.html',
      // controller: 'AuthController'
    })
    .when('/signup', {
      // templateUrl: 'app/auth/signup.html',
      // controller: 'AuthController'
    })
    .when('/board',  {
      templateUrl: 'app/board/board.html'
      // controller: 'BoardController'
    })
    .when('/upload', {
      templateUrl: 'app/upload/upload.html'
    });

  $httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens', function($window) {
  var attach = {
    request: function(object) {
      var jwt = $window.localStorage.getItem('com.photoboard');
      if (jwt) {
        object.headers['x-access-token'] = jwt;  
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function($rootScope, $location, Auth) {
  $rootScope.$on('$routeChangeStart', function(evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/signin');
    }
  });
});