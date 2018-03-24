fusApp.controller('homeCtrl', ['$scope', '$http', '$rootScope', '$state', function ($scope, $http, $rootScope, $state) {
	console.log("In Home Controller!");
	$rootScope.currentState = $state.current.name;
}]);