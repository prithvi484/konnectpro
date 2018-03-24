fusApp.controller('visionCtrl', ['$scope', '$http', '$rootScope', '$state', function ($scope, $http, $rootScope, $state) {
	console.log("In Vision Controller!");
	$rootScope.currentState = $state.current.name;
}]);