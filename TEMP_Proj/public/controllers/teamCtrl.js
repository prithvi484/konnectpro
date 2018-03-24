fusApp.controller('teamCtrl', ['$scope', '$http', '$rootScope', '$state', function ($scope, $http, $rootScope, $state) {
	console.log("In Team Controller!");
	$rootScope.currentState = $state.current.name;
}]);