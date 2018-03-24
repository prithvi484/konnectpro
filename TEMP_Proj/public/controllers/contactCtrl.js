fusApp.controller('contactCtrl', ['$scope', '$http', '$rootScope', '$state', function ($scope, $http, $rootScope, $state) {
	console.log("In Contact Controller!");
	$rootScope.currentState = $state.current.name;

	$scope.contact = [];
	$scope.thankuModal = false;

	
	

	$scope.nameValidator = function (name) {
		return Validator.nameValidator(name);
	};

	$scope.emailValidator = function (email) {
		return Validator.emailValidator(email);
	};

	$scope.phoneValidator = function (phoneNo) {
		return Validator.phoneValidator(phoneNo);
	};

	$scope.sendInfo = function () {
		console.log($scope.contact);
		$http.post('/setMessage', $scope.contact).success(function (response) {
			console.log("Got response: ", response);
			$scope.contact = {};
			$scope.contactForm.reset();
		});
	}

	
}]);