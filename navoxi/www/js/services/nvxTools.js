navoxi.service('nvxTools', function($ionicPopup) {
	var nvxTools = this;

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
		if (window.localStorage.getItem('city'+city) == true)
			return 'UNINSTALL_BUTTON';
		if (window.localStorage.getItem('city'+city) == false)
			return 'INSTALL_BUTTON';
	};

	nvxTools.favoriteButtonMessage = function(button) {
		if (button == false)
			return 'NEWTRIP_FAVORITE_BUTTON_ADD';
		else
			return 'NEWTRIP_FAVORITE_BUTTON_CANCEL';
	};

	nvxTools.goTo = function(id, path, isBack) {
		if (!isBack)
			window.sessionStorage.setItem('lastId', id);
		window.location.href = path;
	};
});