navoxi.controller('navigationCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {

	$scope.favoriteButton = false;
	$scope.departure = null;
	$scope.arrival = null;
	$scope.showFavorite = false;

	$scope.nvxTools = nvxTools;

	$scope.goTo = function(index, id, path, isBack) {
		nvxTools.goTo(index, id, path, isBack);
	};
	nvxTools.isNav = true;
	
	$scope.card = null;
	$scope.addFavorite = function() {
		window.localStorage.setItem('favoriteDeparture', $scope.departure);
		window.localStorage.setItem('favoriteArrival', $scope.arrival);
	};

	$scope.toggleButton = function(button)
	{
		$scope.showFavorite = true;
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