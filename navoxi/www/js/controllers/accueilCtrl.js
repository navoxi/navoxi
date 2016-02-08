navoxi.controller('accueilCtrl', ['$scope', 'firstBootSrv', 'dataUpdateSrv', 'nvxTools', function($scope, firstBootSrv, dataUpdateSrv, nvxTools) {
	setTimeout(function() {
		// Vérification du type de connexion de l'utilisateur
		if (!(window.sessionStorage.getItem('sessionStarted')))
		{
			window.sessionStorage.setItem('sessionStarted', 1);
			// dataUpdateSrv.checkLanguage();
			dataUpdateSrv.checkConnection();
			window.sessionStorage.setItem('lastId', 'home-navigation');
		}
		// Test si premier lancement de l'appli ou pas
		if (!(window.localStorage.getItem('firstBoot')))
		{
		    setTimeout(function() {
				window.localStorage.setItem('firstBoot', 1);
				firstBootSrv.createStopsTable("navoxi.db", "0.1", "SQLite database for Navoxi", 5000 * 1024 * 1024);
				firstBootSrv.initSettings();
			}, 500);
		}
		$scope.goTo = function(id, path, isBack) {
			nvxTools.goTo(id, path, isBack);
		};
	}, 500);
}]);