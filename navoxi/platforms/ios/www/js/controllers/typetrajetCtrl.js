navoxi.controller('typetrajetCtrl', ['$scope', function($scope) {
	$scope.goToNewTrip = function() {
		window.location.href = "#/nouveautrajet";
	}
	$scope.goToGuidanceFastest = function() {
		window.location.href = "#/guidage";
	}
	$scope.goToGuidanceLessWalking = function() {
		window.location.href = "#/guidage";
	}
	$scope.goToGuidanceLessTransfer = function() {
		window.location.href = "#/guidage";
	}
}])