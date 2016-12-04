angular.module('beDesign').controller('cartCtrl', function($scope, $state, $stateParams, mainSrvc) {

    $scope.state = $state;

    $scope.getProduct = function() {
        mainSrvc.getProduct($stateParams.id).then(function(response) {
            $scope.products = response.data[0];
        });
    };
    $scope.getProduct();
    //
    // $scope.getCart = function() {
    //     mainSrvc.getCart().then(function(response) {
    //         $scope.cart = response.data;
    //         $state.go('cart');
    //     });
    // };
    // $scope.getCart();

    $scope.cart = mainSrvc.cart;

    $scope.remove = function(item) {
      var index = $scope.cart.indexOf(item);
      $scope.cart.splice(index, 1);     
    };

});
