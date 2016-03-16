navoxi.controller('typetrajetCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	
	$scope.nvxTools = nvxTools;
	nvxTools.isNav = false;

	$scope.goTo = function(index, id, path, isBack) {
		nvxTools.goTo(index, id, path, isBack);
	};
}])