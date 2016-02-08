navoxi.controller('villesCtrl', ['$scope', '$http', 'nvxTools', function($scope, $http, nvxTools) {
	$scope.citiesList = [];

	var stringToBool = function(val) {
    	return (val + '').toLowerCase() === 'true';
	};

	for (item in window.localStorage)
	{
		if (item.substring(0, 4) == "city")
		{
			$scope.citiesList.push({
				name: item.substr(item.indexOf('city') + 'city'.length),
				checked: stringToBool(window.localStorage.getItem(item))
			});
		}
	}
	$scope.Paris = window.localStorage.getItem('cityParis');
	$scope.Lyon = window.localStorage.getItem('cityLyon');
	$scope.Marseille = window.localStorage.getItem('cityMarseille');
	$scope.goTo = function(id, path, isBack) {
		nvxTools.goTo(id, path, isBack);
	};
	$scope.buttonMessage = function(city) {
		return nvxTools.cityButtonMessage(city);
	};
	$scope.toggleButton = function(city) {
		if (window.localStorage.getItem('city'+city) == 'true')
		{
			window.localStorage.setItem('city'+city, 'false');
			return nvxTools.cityButtonMessage(city);
		}
		if (window.localStorage.getItem('city'+city) == 'false')
		{
			$http({
				method: 'get',
				url: 'http://213.246.56.119:8080/home'
			})
			.then(function(res) {
				nvxTools.printBase(res.data, "navoxi.db", "0.1", "SQLite Database for Navoxi", 5000 * 1024 * 1024);	
			});
			window.localStorage.setItem('city'+city, 'true');
			return nvxTools.cityButtonMessage(city);
		}
	};
}]);