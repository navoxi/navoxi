navoxi.controller('villesCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	$scope.goToHome = function() {
		window.location.href = "#/accueil";
	};
}]);