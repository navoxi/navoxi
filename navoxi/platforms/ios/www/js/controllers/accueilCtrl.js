navoxi.controller('accueilCtrl', ['$scope', '$http', 'firstBootSrv', 'dataUpdateSrv', 'nvxTools', function($scope, $http, firstBootSrv, dataUpdateSrv, nvxTools) {
	setTimeout(function() {
		$http({
			method: 'get',
			url: 'http://213.246.56.119:8080/home'
		})
		.then(function(res) {
			nvxTools.nvxAlert(res.data);
		});
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
			firstBootSrv.initSettings();
			}, 500);
		}
		$scope.goTo = function(id, path, isBack) {
			nvxTools.goTo(id, path, isBack);
		};
	}, 500);
}]);