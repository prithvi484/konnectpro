cpApp.controller('loginCtrl', ['$scope', '$state', 'userService',function ($scope, $state, userService) {
	console.log("LOGIN CONTROLLER");

	$scope.logindetails = {
		"username": "",
		"password": ""
	}

	$scope.login = function () {
		console.log("logindetails", $scope.logindetails);
	}

	$scope.showPopup=function(){
		alert($scope.MyData);
	  };

	  $scope.signUp = {
		  "name":"",
		  "email":"",
		  "role":"",
		  "password":"",
		  "confirmPassword":""
	  }

	  $scope.register = function(){
		console.log($scope.signUp);
		userService.createUser($scope.signUp)
		.then(data=>{
			console.log(data)
		})

	  }
}]);