navoxi.controller('reglagesCtrl', ['$scope', 'nvxTools', '$location', '$anchorScroll', function($scope, nvxTools, $location, $anchorScroll) {
	$scope.goToHome = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/accueil";
	};

	$scope.goToNotifications = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/notifications";
	};

	// nvxTools.nvxAlert(window.sessionStorage.getItem('lastId'));
	setTimeout(function() {
		$location.hash(window.sessionStorage.getItem('lastId'));
		$anchorScroll();
		// nvxTools.nvxAlert(window.sessionStorage.getItem('lastId'));
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