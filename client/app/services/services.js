angular.module('photoboard.services', [])

.factory('Photos', function($http) {
  var getImages = function() {
    return $http({
      method: 'GET',
      url: '/api/photos'
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  return {getImages: getImages};
});