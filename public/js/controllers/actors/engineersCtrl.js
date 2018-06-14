// import * as faker from 'faker'
// import{ name } from 'faker/locale/en'
// var {name} = require('faker');
cpApp.controller('engineersCtrl', ['$scope', '$state','$http', 'userService', function ($scope, $state,$http, userService) {
	$scope.router = function(_id){
		$state.go('details');
	}
	$scope.categories =[];
    $scope.categoryOption = {};
    $scope.locationOption={};
    $scope.locations = [];
    $scope.experiences = [];
    $scope.availabilities = [];
	userService.getCategories('engineer')
	.then(categories=>{
		categories.map(category=>$scope.categoryOption[category]=false);
		$scope.categories = categories;
    })
    $scope.locationRefresh = ()=>{

    }

    $scope.clearFilters = () => {
        $scope.categoryOption = {};
        $scope.filterRefresh();
    }
    $scope.filterRefresh = ()=>{
		const keys = Object.keys($scope.categoryOption).filter(cat=>$scope.categoryOption[cat])
		userService.getActors('engineer', keys)
		.then(data=>{
			$scope.data = data
		})
	}
	$scope.categoryRefresh = ()=>{
		const keys = Object.keys($scope.categoryOption).filter(cat=>$scope.categoryOption[cat])
		userService.getActors('engineer', keys)
		.then(data=>{
			$scope.data = data
		})
	}
	$scope.categoryRefresh();
	$scope.hotels = [
		{
			name: 'the taj hotel',
			star: 5,
			type: 'luxury',
			price: 5675
		},
		{
			name: 'vivanta Palace',
			star: 5,
			type: 'luxury',
			price: 8670
		},
		{
			name: 'aviary',
			star: 4,
			type: 'double suite',
			price: 3000
		},
		 {
			name: 'dummy',
			star: 4,
			type: 'dummy',
			price: 33333100
		},
		{
			name: 'good guest',
			star: 3,
			type: 'double suite',
			price: 3500
		},
		{
			name: 'the ramada',
			star: 3,
			type: 'luxury',
			price: 7500
		}
    ];
    $scope.filterDisplayStatus = {
        engineers: false,
        location: false,
        experience: false,
        availability: false
    }
    $scope.onToggleFilter = function(filterName){
        $scope.filterDisplayStatus[filterName] = !$scope.filterDisplayStatus[filterName]
    }
	// $scope.data = [
	// 	{
	// 		"_id": "5ab5f93100d0071bf46b3393",
	// 		"email": "abc@1111.com",
	// 		"role": "engineer",
	// 		"username": "Dr Satish",
	// 		"address": "Banshankri,Bangalore",
	// 		"mobilenumber": 123,
	// 		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
	// 		"timingsavailble": "1am - 2am",
	// 		"image": "images/doc.png",
	// 		"subImages":[
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"}
	// 		],

	// 		"__v": 0
	// 	},
	// 	{
	// 		"_id": "5ab5f93100d0071bf46b3392",
	// 		"email": "abc@1111.com",
	// 		"role": "engineer",
	// 		"username": "Dr Pooja",
	// 		"address": "Malleshwaram,Bangalore",
	// 		"mobilenumber": 123,
	// 		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
	// 		"timingsavailble": "1am - 2am",
	// 		"image": "images/doc.png",
	// 		"subImages":[
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"}
	// 		],			
	// 		"__v": 0
	// 	},
	// 	{
	// 		"_id": "5ab5f93100d0071bf46b3391",
	// 		"email": "abc@1111.com",
	// 		"role": "engineer",
	// 		"username": "Dr Kumar",
	// 		"address": "J.P.Nagar,Bangalore",
	// 		"mobilenumber": 123,
	// 		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
	// 		"timingsavailble": "1am - 2am",
	// 		"image": "images/doc.png",
	// 		"subImages":[
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"}
	// 		],

	// 		"__v": 0
	// 	}, {
	// 		"_id": "5ab5f93100d0071bf46b3390",
	// 		"email": "abc@1111.com",
	// 		"role": "engineer",
	// 		"username": "Dr Satishbabu",
	// 		"address": "Jayanagar,Bangalore",
	// 		"mobilenumber": 123,
	// 		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
	// 		"timingsavailble": "1am - 2am",
	// 		"image": "images/doc.png",
	// 		"subImages":[
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"}
	// 		],

	// 		"__v": 0
	// 	}, {
	// 		"_id": "5ab5f93100d0071bf46b3390",
	// 		"email": "abc@1111.com",
	// 		"role": "engineer",
	// 		"username": "Dr Akash",
	// 		"address": "Sadashivnagar,Bangalore",
	// 		"mobilenumber": 123,
	// 		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
	// 		"timingsavailble": "1am - 2am",
	// 		"image": "images/doc.png",
	// 		"subImages":[
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"},
	// 			{"url":"images/doc.png"}
	// 		],

	// 		"__v": 0
	// 	}
	// ]

	$scope.links =[
		{
			"goto":"abcd",
			"title":"engineers in J.P.Nagar"
		},
		{
			"goto":"efgh",
			"title":"engineers in Jayanagar"
		},
		{
			"goto":"",
			"title":"engineers in malleshwaram"
		},
		{
			"goto":"",
			"title":"engineers in Jayanagar"
		},
		{
			"goto":"",
			"title":"engineers in BTM"
		}
	]

}]);