navoxi.service('iosDataUpdate', function(nvxTools) {
	var iosDataUpdate = this;

	iosDataUpdate.checkConnection = function() {
		if (navigator.connection.type == Connection.NONE)
		{
			nvxTools.nvxAlert("Aucune connexion disponible. Rendez-vous dans l'application Réglages pour activer la connexion Wi-Fi/3G");
		}
	};
})