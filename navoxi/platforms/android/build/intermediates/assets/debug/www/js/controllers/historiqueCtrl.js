navoxi.controller('historiqueCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	$scope.goTo = function(id, path, isBack) {
		nvxTools.goTo(id, path, isBack);
	};

	$scope.nvxTools = nvxTools;
	nvxTools.isNav = true;
}]);