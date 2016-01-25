navoxi.controller('reglagesCtrl', ['$scope', 'nvxTools', '$location', '$ionicScrollDelegate', function($scope, nvxTools, $location, $ionicScrollDelegate) {
	$scope.goToHome = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/accueil";
	};

	$scope.goToNotifications = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/notifications";
	};

	setTimeout(function() {
		$location.hash(window.sessionStorage.getItem('lastId'));
		$ionicScrollDelegate.anchorScroll();
	}, 1000);
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