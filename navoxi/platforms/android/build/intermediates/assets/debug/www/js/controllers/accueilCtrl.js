navoxi.controller('accueilCtrl', ['$scope', 'firstBootSrv', 'dataUpdateSrv', 'nvxTools', function($scope, firstBootSrv, dataUpdateSrv, nvxTools) {
	setTimeout(function() {
		// Vérification du type de connexion de l'utilisateur
		if (!(window.sessionStorage.getItem('sessionStarted')))
		{
			window.sessionStorage.setItem('sessionStarted', 1);
			dataUpdateSrv.checkConnection();
		}
		// Test si premier lancement de l'appli ou pas
		if (!(window.localStorage.getItem('firstBoot')))
		{
		    setTimeout(function() {
			window.localStorage.setItem('firstBoot', 1);
			firstBootSrv.initSettings();
			}, 500);
		}

		$scope.goToNavigation = function() {
			window.location.href = "#/navigation";
		};
		$scope.goToCities = function() {
			window.location.href = "#/villes"
		};
		$scope.goToSettings = function() {
			window.location.href = "#/reglages"
		};
		$scope.goToAbout = function() {
			window.location.href = "#/apropos"
		}
			}, 500);
}]);