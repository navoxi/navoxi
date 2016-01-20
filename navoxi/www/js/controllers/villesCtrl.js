navoxi.controller('villesCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	$scope.goToHome = function() {
		window.location.href = "#/accueil";
	}
	$scope.refreshCities = function() {
		nvxTools.nvxAlert("Base de données actualisée");
		var msg = 'alert("Base de données actualisée")';
		setTimeout(msg, 42);
	}
}]);