navoxi.controller('villesCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	function stringToBool(val) {
    	return (val + '').toLowerCase() === 'true';
	}
	// $scope.citiesList = [];
	// for (item in window.localStorage)
	// {
	// 	if (item.substring(0, 4) == "city")
	// 	{
	// 		$scope.citiesList.push({
	// 			name: item.substr(indexOf('city') + 4),
	// 			checked: stringToBool(item)
	// 		});
	// 	}
	// }
	$scope.goTo = function(id, path, isBack) {
		nvxTools.goTo(id, path, isBack);
	};
	$scope.buttonMessage = function(city) {
		// nvxTools.nvxAlert(window.localStorage.getItem('city'+city));
		return nvxTools.cityButtonMessage(city);
	};
	// nvxTools.nvxAlert(window.sessionStorage.getItem('lastId'));
	
	$scope.citiesList = [
	{
		text: "Paris (RATP)",
		name: "Paris",
		checked: stringToBool(window.localStorage.getItem('cityParis'))
	},
	{
		text: "Marseille (RTM)",
		name: "Marseille",
		checked: stringToBool(window.localStorage.getItem('cityMarseille'))
	},
	{
		text: "Lyon (TCL)",
		name: "Lyon",
		checked: stringToBool(window.localStorage.getItem('cityLyon'))
	}];
	// $scope.Paris = window.localStorage.getItem('cityParis');
	// $scope.Marseille = window.localStorage.getItem('cityMarseille');
	// $scope.Lyon = window.localStorage.getItem('cityLyon');
	$scope.toggleButton = function(city) {
		$scope[city] = !$scope[city];
		if (window.localStorage.getItem('city'+city) == 'true')
		{
			window.localStorage.setItem('city'+city, 'false');
			return nvxTools.cityButtonMessage(city);
		}
		else if (window.localStorage.getItem('city'+city) == 'false')
		{
			window.localStorage.setItem('city'+city, 'true');
			return nvxTools.cityButtonMessage(city);
		}
		else
			nvxTools.nvxAlert(window.localStorage.getItem('city'+city));
	};
}]);