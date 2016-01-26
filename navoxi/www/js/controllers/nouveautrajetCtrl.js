navoxi.controller('nouveautrajetCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	$scope.goTo = function(id, path, isBack) {
		nvxTools.goTo(id, path, isBack);
	};

	$scope.favoriteButton = false;

	$scope.addFavorite = function() {
		window.localStorage.setItem('favoriteDeparture', $scope.departure);
		window.localStorage.setItem('favoriteArrival', $scope.arrival);
	};

	$scope.toggleButton = function(button)
	{
		$scope[button] = !$scope[button];
		// nvxTools.nvxAlert($scope[button]);
		return nvxTools.favoriteButtonMessage(button);
	};

	$scope.buttonMessage = function(button) {
		return nvxTools.favoriteButtonMessage(button);
	};

	$scope.validateFavorite = function(favorite) {
		nvxTools.nvxAlert("Nouveau favori ajouté : " + favorite);
	};

	$scope.selectFromGallery = function() {
		nvxTools.nvxAlert("Lancer Galerie");
	};

	$scope.selectFromCamera = function() {
		nvxTools.nvxAlert("Lancer Caméra");
	};

	$scope.tripCalculation= function() {
		nvxTools.nvxAlert("Calcul du trajet");
	};
}])