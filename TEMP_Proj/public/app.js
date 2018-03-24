var fusApp = angular.module('fusApp', ['ui.router', 'angularValidator', 'ui.bootstrap','ngSanitize']);

fusApp.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/templates/home.html',
			controller: 'homeCtrl'
		})

		.state('about', {
			url: '/about',
			templateUrl: '/templates/about.html',
			controller: 'aboutCtrl'
		})

		.state('product', {
			url: '/product',
			templateUrl: '/templates/product.html',
			controller: 'productCtrl'
		})

		.state('vision', {
			url: '/vision',
			templateUrl: '/templates/vissionandmission.html',
			controller: 'visionCtrl'
		})

		.state('contact', {
			url: '/contact',
			templateUrl: '/templates/contact.html',
			controller: 'contactCtrl'
		})

		.state('team', {
			url: '/team',
			templateUrl: '/templates/team.html',
			controller: 'teamCtrl'
		});

	$urlRouterProvider.otherwise('/home');
});