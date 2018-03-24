fusApp.controller('aboutCtrl', ['$scope', '$http', '$rootScope', '$state', function ($scope, $http, $rootScope, $state) {
	console.log("In About Controller!");
	$rootScope.currentState = $state.current.name;
}]);