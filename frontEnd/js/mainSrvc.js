angular.module('beDesign').service('mainSrvc', function($http) {

    this.getAllProducts = function(){
      return $http({
        method: 'GET',
        url: 'http://localhost:8000/api/products'
      });
    };

    this.getProduct = function(id) {
        return $http({
                  method: 'GET',
                  url: 'http://localhost:8000/api/products/' + id
                });
    };
});
