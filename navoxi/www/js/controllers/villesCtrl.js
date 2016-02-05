navoxi.controller('villesCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
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
			window.localStorage.setItem('city'+city, 'true');
			return nvxTools.cityButtonMessage(city);
		}
	};
}]);