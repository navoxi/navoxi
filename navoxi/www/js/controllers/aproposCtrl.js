navoxi.controller('aproposCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	$scope.goTo = function(id, path, isBack) {
		nvxTools.goTo(id, path, isBack);
	};
}])