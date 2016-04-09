navoxi.controller('guidageCtrl', ['$scope', '$ionicPlatform', 'nvxTools', function($scope, $ionicPlatform, nvxTools) {
	$scope.goTo = function(index, id, path, isBack) {
		nvxTools.goTo(index, id, path, isBack);
	};
	$scope.nvxTools = nvxTools;
	nvxTools.isNav = false;
  $scope.train = nvxTools.getTrain();

  $scope.traffic = nvxTools.traffic;

	$scope.numStep = 0;
	var region = {
		uuid: '19841986-1992-1995-2016-423323332442'
	};

	var formerMessage = "";
	$ionicPlatform.ready(function() {
		TTS.speak({
    		text: 'Prenez l\'escalier, et tournez à gauche',
    		locale: 'fr-FR',
    		rate: 1
	    }, function() {
	    	$scope.message = 'Prenez l\'escalier, et tournez à gauche';
	    }, function() {});

		var onRangingSuccess = function(result) {
			$scope.$apply();
		    result.beacons.sort(function(beacon1, beacon2) {
		        return (beacon1.distance > beacon2.distance);
		    });
		    $scope.beacon = result.beacons[0];
		    if ($scope.beacon.distance < 2)
		    {
		    	if ($scope.beacon.minor == 42) {
			    	$scope.message = "Prenez à droite, puis immédiatement à gauche.";
			    }
			    else if ($scope.beacon.minor == 43) {
			    	$scope.message = "Vous êtes arrivés sur le quai. Direction Levallois, prochain train dans une minute.";
			    }
			    else {
			    	$scope.message = "Pas de balise trouvée.";
			    }

			    if ($scope.message != formerMessage)
			    {
			    	$scope.numStep += 1;
			    	formerMessage = $scope.message;
			    	TTS.speak({
			    		text: $scope.message,
			    		locale: 'fr-FR',
			    		rate: 1
			    	});
			    }
		    }
		}

		var onRangingError = function() {
			alert('Error while Ranging');
		}
		estimote.beacons.startRangingBeaconsInRegion(region, onRangingSuccess, onRangingError);
	});

}])
