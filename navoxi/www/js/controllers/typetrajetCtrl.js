navoxi.controller('typetrajetCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	$scope.goToNewTrip = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/nouveautrajet";
	}
	$scope.goToGuidanceFastest = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/guidage";
	}
	$scope.goToGuidanceLessWalking = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/guidage";
	}
	$scope.goToGuidanceLessTransfer = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/guidage";
	}
}])