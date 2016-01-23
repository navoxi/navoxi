navoxi.controller('villesCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	$scope.goToHome = function() {
		window.location.href = "#/accueil";
	};

	$scope.cityButton = function(city)	{
		var install, uninstall;
		navigator.globalization.getPreferredLanguage(function(language) {
			if (language.value == "fr-FR")
			{
				install = "Installer";
				uninstall = "Désinstaller";
			}
			if (window.localStorage.getItem('city' + city) == 'true')
			{
				nvxTools.nvxAlert(uninstall);
				return uninstall;
			}
			if (window.localStorage.getItem('city' + city) == 'false')
			{	
				nvxTools.nvxAlert(install);
				return install;
			}
		}, function() {
			nvxTools.nvxAlert('Cannot get language');
		});
	};
}]);