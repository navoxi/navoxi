navoxi.service('nvxTools', function($ionicPopup) {
	var nvxTools = this;
	var tablines = [];
	// var requests = [];

	var index = 0;
	nvxTools.nvxAlert = function(msg) {
		setTimeout(function() {
			alert(msg);
		}, 250);
	}

	nvxTools.showPopup = function(title, subtitle, buttons) {
		return $ionicPopup.show({
			title: title,
			subtitle: subtitle,
			buttons: buttons
		});
	};

	nvxTools.setId = function(id) {
		window.sessionStorage.setItem('lastId', id);
		// nvxTools.nvxAlert(window.sessionStorage.getItem('lastId'));
	};

	nvxTools.cityButtonMessage = function(city) {
		if (window.localStorage.getItem('city'+city) === 'true')
			return 'UNINSTALL_BUTTON';
		if (window.localStorage.getItem('city'+city) === 'false')
			return 'INSTALL_BUTTON';
	};

	nvxTools.favoriteButtonMessage = function(button) {
		if (button == false)
			return 'NEWTRIP_FAVORITE_BUTTON_ADD';
		else
			return 'NEWTRIP_FAVORITE_BUTTON_CANCEL';
	};

	nvxTools.initCitiesButtons = function(scope) {
		for (item in window.localStorage)
		{
			if (item.substring(0, 4) == "city")
			{
				scope[item] = window.localStorage.getItem(item);
			}
		}
	};

	nvxTools.printBase = function(req, dbName, dbVersion, dbDescription, dbSize) {
		// var request = "INSERT INTO stops VALUES(3619398,'MOZART','48.82591284305459','2.4730757500410943','Bus','101');\nINSERT INTO stops VALUES(3619397,'JOUGLA','48.82267666521304','2.4736117295778453','Bus','101');\nINSERT INTO stops VALUES(3619400,'POLANGIS','48.82769843508789','2.475639580210116','Bus','101');\nINSERT INTO stops VALUES(3619403,'CAMPING INTERNATIONAL','48.830254354349144','2.480342953010865','Bus','101');\nINSERT INTO stops VALUES(3619391,'JOINVILLE-LE-PONT RER','48.821689262343234','2.4643672947452','Bus','101');";
		var requests = req.split('\n');
		
		var db = openDatabase(dbName, dbVersion, dbDescription, dbSize);

		db.transaction(function(tx) {
			while (index < requests.length - 1)
			{
					tx.executeSql(requests[index],
						[], function(t, data) {

						}, function() {
							nvxTools.nvxAlert('ERROR');
					});
				index++;
			}
		});
		nvxTools.nvxAlert('Finished !');
	}

	nvxTools.goTo = function(id, path, isBack) {
		if (!isBack)
			window.sessionStorage.setItem('lastId', id);
		window.location.href = path;
	};
});