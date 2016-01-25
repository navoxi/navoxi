navoxi.controller('aproposCtrl', ['$scope', 'nvxTools', function($scope, nvxTools) {
	$scope.goToHome = function(id) {
		nvxTools.setId(id);
		window.location.href = "#/accueil";
	}
}])