navoxi.service('firstBootSrv', function() {
	var firstBootSrv = this;
	firstBootSrv.initSettings = function() {
		window.localStorage.setItem('stgCurrentStopNotif', 'both');
		window.localStorage.setItem('stgWayDownNotif', 'both');
		window.localStorage.setItem('stgDuringTransferNotif', 'both');
		window.localStorage.setItem('stgExitType', 'automatic');
		window.localStorage.setItem('stgVocalRate', 50);
		window.localStorage.setItem('stgHistorySize', 5);
		window.localStorage.setItem('stgSmartwatchNotif', 'deactivate');
	};
});
