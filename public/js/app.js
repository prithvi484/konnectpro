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
    .state('doctors', {
      url: '/doctors',
      templateUrl: 'templates/actors/doctors.html',
      controller: 'doctorsCtrl'
    })
    .state('plumbers', {
      url: '/plumbers',
      templateUrl: 'templates/actors/plumbers.html',
      controller: 'plumbersCtrl'
    })
    .state('carpenters', {
      url: '/carpenters',
      templateUrl: 'templates/actors/carpenters.html',
      controller: 'carpentersCtrl'
    })
    .state('architects', {
      url: '/architects',
      templateUrl: 'templates/actors/architects.html',
      controller: 'architectsCtrl'
    })
    .state('painters', { 
      url: '/painters',
      templateUrl: 'templates/actors/painter.html',
      controller: 'painterCtrl'
    })
    .state('electricians', {
      url: '/electricians',
      templateUrl: 'templates/actors/electricians.html',
      controller: 'electriciansCtrl'
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