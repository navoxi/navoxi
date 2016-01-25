navoxi.service('firstBootSrv', function() {
	var firstBootSrv = this;
	firstBootSrv.initSettings = function() {
		window.localStorage.setItem('ntfCurrentStop', 'both');
		window.localStorage.setItem('ntfWayDown', 'both');
		window.localStorage.setItem('ntfDuringTransfer', 'both');
		window.localStorage.setItem('stgExitType', 'automatic');
		window.localStorage.setItem('stgVocalRate', 50);
		window.localStorage.setItem('stgHistorySize', 5);
		window.localStorage.setItem('stgSmartwatchNotif', 'deactivate');
		window.localStorage.setItem('cityParis', 'false');
		window.localStorage.setItem('cityLyon', 'false');
		window.localStorage.setItem('cityMarseille', 'false');
	};
});
