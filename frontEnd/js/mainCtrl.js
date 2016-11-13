angular.module('beDesign').controller('mainCtrl', function($scope, mainSrvc) {

    $scope.getAllProducts = function() {
        mainSrvc.getAllProducts().then(function(response) {
            $scope.products = response.data;
        });
    };
    $scope.getAllProducts();

    $scope.getProduct = function() {
        mainSrvc.getProduct().then(function(response) {
            $scope.item = response.data;
        });
    };
    $scope.getProduct();




});
