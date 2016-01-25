navoxi.controller('navigationCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	$scope.goToNewTrip = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/nouveautrajet";
	}
	$scope.goToHistory = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/historique";
	}
	$scope.goToFavorites = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/favoris";
	}
	$scope.goToHome = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/accueil";
	}
}])