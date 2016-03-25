navoxi.controller('navigationCtrl', ['$scope', 'nvxTools', 'dataUpdateSrv', 'firstBootSrv', function($scope, nvxTools, dataUpdateSrv, firstBootSrv) {

	// Vérification du type de connexion de l'utilisateur
	if (!(window.sessionStorage.getItem('sessionStarted')))
	{
			window.sessionStorage.setItem('sessionStarted', 1);
			// dataUpdateSrv.checkLanguage();
			dataUpdateSrv.checkConnection();
			window.sessionStorage.setItem('lastId', '');
	}
	// Test si premier lancement de l'appli ou pas
	if (!(window.localStorage.getItem('firstBoot')))
	{
			window.localStorage.setItem('firstBoot', 1);
			firstBootSrv.initSettings();
	}

	$scope.favoriteButton = false;

	/* Valeurs par défaut pour la démo du hackathon */
	$scope.departure = "Hall d'entrée de 42";
	$scope.arrival = "Amphi"; 
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