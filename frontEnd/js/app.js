var beDesigns = angular.module('beDesign', ['ui.router']);

beDesigns.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'views/home/home.html',
    controller: 'mainCtrl'
  })

  .state('products', {
    url: '/products',
    templateUrl: 'views/products/allProducts.html',
    controller: 'allProductsCtrl'
  })

  .state('product', {
    url: '/product/:id',
    templateUrl: 'views/products/singleProduct.html',
    controller: 'singleProductCtrl'
  })

  .state('cart', {
    url: '/cart',
    templateUrl: 'views/cart/cart.html',
    controller: 'cartCtrl'
  })

  .state('about', {
    url: '/about',
    templateUrl: 'views/about/about.html',
    controller: 'aboutCtrl'
  });

});
