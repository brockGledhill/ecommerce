angular.module('beDesign').controller('allProductsCtrl', function($scope, $state, mainSrvc) {

    $scope.state = $state;

    $scope.getAllProducts = function() {
        mainSrvc.getAllProducts().then(function(response) {
            $scope.products = response.data;
            $state.go('products');
        });
    };
    $scope.getAllProducts();

});
