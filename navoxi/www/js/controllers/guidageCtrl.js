navoxi.controller('guidageCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	$scope.goToTripType = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/typetrajet";
	}
}])