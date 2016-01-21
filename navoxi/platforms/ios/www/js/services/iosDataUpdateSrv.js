navoxi.service('iosDataUpdate', function(nvxTools) {
	var iosDataUpdate = this;

	iosDataUpdate.checkConnection = function() {
		if (navigator.connection.type == Connection.NONE)
		{
			nvxTools.showPopup('Aucune connexion activée', 'Veuillez activer le Wi-Fi ou les données cellulaires',
				[
					{
						text: 'Lancer Réglages',
						onTap: function(e) {
							e.label = "settings";
							return e;
						}
					},
					{
						text: 'Annuler',
						onTap: function(e) {
							e.label = "cancel";
							return e;
						}
					}
				]
			)
			.then(function(res) {
				if (res.label == "settings")
				{
					cordova.plugins.diagnostic.switchToSettings(function(){

					}, function(error){
					    nvxTools.nvxAlert("Impossible de lancer l'application Réglages");
					});
				}
			})
		}
	};
})