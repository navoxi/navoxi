navoxi.service('firstBootSrv', function(nvxTools) {
	var firstBootSrv = this;
	firstBootSrv.initSettings = function() {
		window.localStorage.setItem('ntfCurrentStop', 'both');
		window.localStorage.setItem('ntfWayDown', 'both');
		window.localStorage.setItem('ntfDuringTransfer', 'both');
		window.localStorage.setItem('stgExitType', 'automatic');
		window.localStorage.setItem('stgVocalRate', 50);
		window.localStorage.setItem('stgHistorySize', 5);
		window.localStorage.setItem('stgSmartWatchNotif', 'deactivate');
		window.localStorage.setItem('cityParis', 'false');
		window.localStorage.setItem('cityLyon', 'false');
		window.localStorage.setItem('cityMarseille', 'false');
	};

	firstBootSrv.createStopsTable = function(dbName, dbVersion, dBDescription, dbSize) {
		var db = openDatabase(dbName, dbVersion, dBDescription, dbSize);
		db.transaction(function(tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS stops(stop_id int(10), stop_name varchar(100), stop_lat varchar(20), stop_lon varchar(20), physical_mode varchar(20), transport_line varchar(20), PRIMARY KEY (stop_name, transport_line));',
				[], function() {
					// nvxTools.nvxAlert('creation ok');
				}, function() {
					nvxTools.nvxAlert('Error when creation');
			});
		});
	};
});
