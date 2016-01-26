navoxi.controller('villesCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	$scope.goTo = function(id, path, isBack) {
		nvxTools.goTo(id, path, isBack);
	};
	$scope.buttonMessage = function(city) {
		// nvxTools.nvxAlert(window.localStorage.getItem('city'+city));
		return nvxTools.cityButtonMessage(city);
	};
	// nvxTools.nvxAlert(window.sessionStorage.getItem('lastId'));
	$scope.Paris = false;
	$scope.Marseille = false;
	$scope.Lyon = false;
	$scope.toggleButton = function(city) {
		// nvxTools.nvxAlert($scope.paname);
		$scope[city] = !$scope[city];
		window.localStorage.setItem('city'+city, !(window.localStorage.getItem('city' + city)));
		return nvxTools.cityButtonMessage(city);
		// if (window.localStorage.getItem('city'+city) == 'true')
		// {
		// 	window.localStorage.setItem('city'+city, 'false');
		// 	return nvxTools.cityButtonMessage(city);
		// }
		// if (window.localStorage.getItem('city'+city) == 'false')
		// {
		// 	window.localStorage.setItem('city'+city, 'true');
		// 	return nvxTools.cityButtonMessage(city);
		// }
	};
}]);