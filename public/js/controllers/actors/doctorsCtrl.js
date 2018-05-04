cpApp.controller('doctorsCtrl', ['$scope', '$state','$http', function ($scope, $state,$http) {
	console.log("doctors RESULT CONTROLLER");
	$scope.router = function(_id){
		$state.go('details');
	}
	var url = "http://localhost:4200/user/doctor"
	$http.get(url).success(function(data){
		console.log("data",data)
		$scope.data = data;
	});
	
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
	// $scope.data = [
	// 	{
	// 		"_id": "5ab5f93100d0071bf46b3393",
	// 		"email": "abc@1111.com",
	// 		"role": "doctor",
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
	// 		"role": "doctor",
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
	// 		"role": "doctor",
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
	// 		"role": "doctor",
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
	// 		"role": "doctor",
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
			"title":"Doctors in J.P.Nagar"
		},
		{
			"goto":"efgh",
			"title":"Doctors in Jayanagar"
		},
		{
			"goto":"",
			"title":"Doctors in malleshwaram"
		},
		{
			"goto":"",
			"title":"Doctors in Jayanagar"
		},
		{
			"goto":"",
			"title":"Doctors in BTM"
		}
	]

}]);