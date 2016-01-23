navoxi.service('nvxTools', function($ionicPopup, $translate) {
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

	nvxTools.checkLanguage = function()
	{
        navigator.globalization.getPreferredLanguage(function(language) {
          nvxTools.nvxAlert(language.value);
          $translate.use(language.value);
        }, function() {
          nvxTools.nvxAlert("Erreur de langue");
        });
	};

});