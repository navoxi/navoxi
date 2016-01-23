navoxi.service('androidDataUpdate', function($ionicPopup, nvxTools) {
	var androidDataUpdate = this;

	androidDataUpdate.checkConnection = function() {
		if (navigator.connection.type == Connection.NONE)
		{
			nvxTools.showPopup('Aucune connexion activée', 'Veuillez activer le Wi-Fi ou les données mobiles',
				[
					{
						text: 'Activer le Wi-Fi',
						onTap: function(e) {
							e.label = "wifi";
							return e;
						}
					},
					{
						text: 'Activer les données mobiles',
						onTap: function(e) {
							e.label = "mobileData";
							return e;
						}
					},
					{
						text: 'Activer les données mobiles',
						onTap: function(e) {
							e.label = "cancel";
							return e;
						}
					}
				]
			)
			.then(function(res) {
				if (res.label == "wifi")
				{
					cordova.plugins.diagnostic.setWifiState(function() {
							nvxTools.nvxAlert("Wi-Fi activé");
						}, function(error) {
								nvxTools.nvxAlert("Impossible d'activer le Wi-Fi");
							}, true
					);
				}
				if (res.label == "mobileData")
					cordova.plugins.diagnostic.switchToMobileDataSettings();
			});
		}
	};
})