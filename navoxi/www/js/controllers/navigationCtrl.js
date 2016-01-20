navoxi.controller('navigationCtrl', ['$scope', function($scope) {
	$scope.goToNewTrip = function() {
		window.location.href = "#/nouveautrajet";
	}
	$scope.goToHistory = function() {
		window.location.href = "#/historique";
	}
	$scope.goToFavorites = function() {
		window.location.href = "#/favoris";
	}
	$scope.goToHome = function() {
		window.location.href = "#/accueil";
	}
}])