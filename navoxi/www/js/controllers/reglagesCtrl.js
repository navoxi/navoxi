navoxi.controller('reglagesCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	$scope.goToHome = function() {
		window.location.href = "#/accueil";
	};

	$scope.goToNotifications = function() {
		window.location.href = "#/notifications";
	};

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