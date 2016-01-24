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

	nvxTools.buttonMessage = function(city) {
		if (window.localStorage.getItem('city'+city) == "true")
			return 'UNINSTALL_BUTTON';
		if (window.localStorage.getItem('city'+city) == "false")
			return 'INSTALL_BUTTON';
	};

});