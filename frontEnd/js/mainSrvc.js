angular.module('beDesign').service('mainSrvc', function($http) {

    this.cart = [];

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

    this.getCart = function(){
      return $http({
        method: 'GET',
        url: 'http://localhost:8000/api/cart'
      });
    };

    this.updateCart = function(id) {
      return $http({
        method: 'PUT',
        url: 'http://localhost:8000/api/cart'
      });
    };
});
