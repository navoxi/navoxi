navoxi.controller('notificationsCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {

	$scope.goTo = function(index, id, path, isBack) {
		nvxTools.goTo(index, id, path, isBack);
	};

	$scope.nvxTools = nvxTools;
	nvxTools.isNav = false;

	for (item in window.localStorage)
	{
		if (item.substring(0, 3) == "ntf")
		{
			$scope[item] = window.localStorage.getItem(item);
		}
	}

	$scope.refreshSetting = function(key, value) {
		window.localStorage.setItem(key, value);
	};
}]);