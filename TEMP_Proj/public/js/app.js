var cpApp = angular.module('cpApp', ['ui.router','ngMaterial']);

cpApp.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })

    .state('getstarted', {
      url: '/getstarted',
      templateUrl: 'templates/getstarted.html',
      controller: 'getstartedCtrl'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller: 'aboutCtrl'
    })

    .state('searchres', {
      url: '/searchres',
      templateUrl: 'templates/searchres.html',
      controller: 'searchresCtrl'
    })

    .state('details', {
      url: '/details',
      templateUrl: 'templates/details.html',
      controller: 'detailsCtrl'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    });

  $urlRouterProvider.otherwise('/home');
});