cpApp.controller('loginCtrl', ['$scope', '$state', function ($scope, $state) {
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
		  "listOption":"",
		  "password":"",
		  "confirmPassword":""
	  }

	  $scope.register = function(){
		console.log($scope.signUp);

	  }
}]);