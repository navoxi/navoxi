navoxi.service('dataUpdateSrv', function($ionicPlatform, nvxTools, androidDataUpdate, iosDataUpdate) {
	var dataUpdateSrv = this;
	dataUpdateSrv.checkConnection = function() {
		setTimeout(function() {
			$ionicPlatform.ready(function() {
				if (device.platform == "Android")
					androidDataUpdate.checkConnection();
				else if (device.platform == "iOS")
					iosDataUpdate.checkConnection();
			});
		}, 500);
	};
});