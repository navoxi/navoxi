navoxi.controller('nouveautrajetCtrl', ['$scope', function($scope) {
	$scope.goToNavigation = function() {
		window.location.href = "#/navigation";
	}
	$scope.goToTripType = function() {
		window.location.href = "#/typetrajet";
	}
}])