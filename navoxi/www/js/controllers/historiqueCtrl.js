navoxi.controller('historiqueCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	$scope.goToNavigation = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/navigation";
	}
}]);