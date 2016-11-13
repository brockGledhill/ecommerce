var beDesigns = angular.module('beDesign', ['ui.router']);

beDesigns.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'views/home/home.html',
    controller: 'mainCtrl'
  });

});
