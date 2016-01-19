navoxi.service('androidDataUpdate', function($ionicPopup, nvxTools) {
	var androidDataUpdate = this;

	androidDataUpdate.checkConnection = function() {
		if (navigator.connection.type == Connection.NONE)
		{
			$ionicPopup.show({
				title: 'Aucune connexion disponible',
				subtitle: 'Veuillez activer le Wi-Fi ou les données mobiles',
				buttons: [
					{ 
						text: "<b>Paramètres</b>",
						type: "button-positive",
						onTap: function(e) {
							e.result = 1;
							return e;
						}
					},
					{ 
						text: "<b>Annuler</b>",
						type: 'button-negative',
						onTap: function(e) {
							e.result = 0;
							return e;
						}
					}
				]
			})
			.then(function(res) {
				if (res.result == 1)
				{
					navigator.startApp.check("com.android.settings", function(message) {
						navigator.startApp.start("com.android.settings", function(message) {
							// nvxTools.nvxAlert(message);
						}, function() {
							nvxTools.nvxAlert(error);
						});
					}, 
						function(error) {
						    nvxTools.nvxAlert(error);
					});
				}
			});
		}
	};
})