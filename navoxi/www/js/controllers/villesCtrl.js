navoxi.controller('villesCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	$scope.goToHome = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/accueil";
	};
	$scope.buttonMessage = function(city) {
		// nvxTools.nvxAlert(window.localStorage.getItem('city'+city));
		return nvxTools.buttonMessage(city);
	};
	// nvxTools.nvxAlert(window.sessionStorage.getItem('lastId'));
	$scope.Paris = false;
	$scope.Marseille = false;
	$scope.Lyon = false;
	$scope.toggleButton = function(city) {
		// nvxTools.nvxAlert($scope.paname);
		$scope[city] = !$scope[city];
		if (window.localStorage.getItem('city'+city) == 'true')
		{
			window.localStorage.setItem('city'+city, 'false');
			return nvxTools.buttonMessage(city);
		}
		if (window.localStorage.getItem('city'+city) == 'false')
		{
			window.localStorage.setItem('city'+city, 'true');
			return nvxTools.buttonMessage(city);
		}
	};
}]);