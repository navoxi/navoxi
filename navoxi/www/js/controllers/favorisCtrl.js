navoxi.controller('favorisCtrl', ['$scope', 'nvxTools', function($scope, nvxTools, $ionicPopover) {
	$scope.goTo = function(index, id, path, isBack) {
		nvxTools.goTo(index, id, path, isBack);
	};

	$scope.nvxTools = nvxTools;
	nvxTools.isNav = true;
}]);