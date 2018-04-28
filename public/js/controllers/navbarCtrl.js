cpApp.controller('navbarCtrl', ['$scope', '$state', function ($scope, $state) {
	console.log("NAVBAR CONTROLLER");

	$scope.pageChange = function(pageName){
		if(pageName == "getstarted"){
			$state.go('getstarted', {});
		}else if(pageName == "about"){
			$state.go('about', {});
		}else if(pageName == "login"){
			$state.go('login', {});
		}
	};

}]);