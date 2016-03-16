navoxi.controller('guidageCtrl', ['$scope', 'nvxTools', function($scope, $ionicPlatform, nvxTools) {
	$scope.goTo = function(id, path, isBack) {
		nvxTools.goTo(id, path, isBack);
	};
	$scope.nvxTools = nvxTools;
	nvxTools.isNav = false;

	var maRegion = {uuid: '19841986-1992-1995-2016-423323332442'};
	var formerMessage = "";
	$ionicPlatform.ready(function() {
		TTS.speak({
    		text: 'Estoy aqui para guiar usted',
    		locale: 'es-ES',
    		rate: 1
	    });
		var region = {
		proximityUUID: '19841986-1992-1995-2016-423323332442'
		};

		var onRangingSuccess = function(result) {
			$scope.$apply();
		    result.beacons.sort(function(beacon1, beacon2) {
		        return (beacon1.distance > beacon2.distance); 
		    });
		    $scope.beacon = result.beacons[0];
		    if ($scope.beacon.minor == 42) {
		    	$scope.message = "Mint beacon";
		    	// TTS.speak( {
		    	// 	text: $scope.message,
		    	// 	locale: 'FR-fr',
		    	// 	rate: 1
		    	// });
		    }
		    else if ($scope.beacon.minor == 43) {
		    	$scope.message = "Ice beacon";
		    	// TTS.speak( {
		    	// 	text: $scope.message,
		    	// 	locale: 'FR-fr',
		    	// 	rate: 0.6
		    	// });
		    }
		    else if ($scope.beacon.minor == 53777) {
		    	$scope.message = "Violet beacon";
		    	// TTS.speak( {
		    	// 	text: $scope.message,
		    	// 	locale: 'FR-fr',
		    	// 	rate: 0.4
		    	// });
		    }
		    else {
		    	$scope.message = "No beacons found";
		    }
		    if ($scope.message != formerMessage)
		    {
		    	formerMessage = $scope.message;
		    	TTS.speak({
		    		text: $scope.message,
		    		locale: 'en-US',
		    		rate: 1
		    	});
		    }
		}

		var onRangingError = function() {
			alert('Error while Ranging');
		}

		estimote.beacons.startRangingBeaconsInRegion({}, onRangingSuccess, onRangingError);
	});
	// $scope.factory.actu();
	// alert("ctrl");

}])