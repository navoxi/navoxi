navoxi.controller('reglagesCtrl', ['$scope', 'nvxTools', '$location', '$ionicScrollDelegate', function($scope, nvxTools, $location, $ionicScrollDelegate) {
	$scope.goTo = function(id, path, isBack) {
		nvxTools.goTo(id, path, isBack);
	};

	setTimeout(function() {
		$location.hash(window.sessionStorage.getItem('lastId'));
		$ionicScrollDelegate.anchorScroll();
	}, 100);
	for (item in window.localStorage)
	{
		if (item.substring(0, 3) == "stg")
		{
			$scope[item] = window.localStorage.getItem(item);
		}
	}

	$scope.refreshSetting = function(key, value) {
		window.localStorage.setItem(key, value);
	};
	$scope.homeDetection = function() {
		nvxTools.nvxAlert("Detection OK");
	};
	$scope.vocalTest = function() {
		// Reste à implémenter
	};
}])