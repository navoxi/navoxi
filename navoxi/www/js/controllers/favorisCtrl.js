navoxi.controller('favorisCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	$scope.goToNavigation = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/navigation";
	}
}]);