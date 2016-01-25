navoxi.controller('nouveautrajetCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	$scope.goToNavigation = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/navigation";
	}
	$scope.goToTripType = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/typetrajet";
	}
}])