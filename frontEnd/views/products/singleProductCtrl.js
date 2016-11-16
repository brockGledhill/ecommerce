angular.module('beDesign').controller('singleProductCtrl', function($scope, $state, $stateParams, mainSrvc) {

    $scope.state = $state;

    $scope.getProduct = function(id) {
        mainSrvc.getProduct().then(function(response) {
            if (response.data.product_id === $stateParams.id) {
                $scope.product = response.data;
            }
        });
    };
    $scope.getProduct();

});
