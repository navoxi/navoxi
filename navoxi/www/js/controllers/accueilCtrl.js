navoxi.controller('accueilCtrl', ['$scope', '$location', '$anchorScroll', 'firstBootSrv', 'dataUpdateSrv', 'nvxTools', function($scope, $location, $anchorScroll, firstBootSrv, dataUpdateSrv, nvxTools) {
	setTimeout(function() {

		// Vérification du type de connexion de l'utilisateur
		if (!(window.sessionStorage.getItem('sessionStarted')))
		{
			window.sessionStorage.setItem('sessionStarted', 1);
			// dataUpdateSrv.checkLanguage();
			dataUpdateSrv.checkConnection();
			dataUpdateSrv.initId();
		}
		// Test si premier lancement de l'appli ou pas
		if (!(window.localStorage.getItem('firstBoot')))
		{
		    setTimeout(function() {
			window.localStorage.setItem('firstBoot', 1);
			firstBootSrv.initSettings();
			}, 500);
		}

		$scope.goToNavigation = function(id) {
			nvxTools.setId(id);
			window.location.href = "#/navigation";
		};
		$scope.goToCities = function(id) {
			nvxTools.setId(id);
			window.location.href = "#/villes"
		};
		$scope.goToSettings = function(id) {
			nvxTools.setId(id);
			window.location.href = "#/reglages"
		};
		$scope.goToAbout = function(id) {
			nvxTools.setId(id);
			window.location.href = "#/apropos"
		}
	}, 500);
}]);