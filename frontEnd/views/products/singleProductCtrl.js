angular.module('beDesign').controller('singleProductCtrl', function($scope, $state, $stateParams, mainSrvc) {

    $scope.getProduct = function() {
        mainSrvc.getProduct($stateParams.id).then(function(response) {
            $scope.product = response.data[0];
        });
    };
    $scope.getProduct();

    $scope.addToCart = function() {
      mainSrvc.cart.push($scope.product);
    };

    // $scope.addToCart = function() {
    //     mainSrvc.addToCart($stateParams.id).then(function(response) {
    //         $scope.product = response.data[0];
    //     });
    // };
    // $scope.addToCart();

});
