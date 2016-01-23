navoxi.config(['$translateProvider', function($translateProvider) {
    $translateProvider.translations('fr-FR', {
    	'INSTALL_BUTTON':'Ajouter',
    	'UNINSTALL_BUTTON': 'Supprimer',
    	'NAVIGATION_BUTTON': 'Navigation',
    	'CITIES_BUTTON': 'Villes',
    	'SETTINGS_BUTTON': 'Réglages',
    	'ABOUT_BUTTON': 'À propos'
    });
    $translateProvider.translations('en-US', {
    	'INSTALL_BUTTON':'Add',
    	'UNINSTALL_BUTTON': 'Remove',
    	'NAVIGATION_BUTTON': 'Navigation',
    	'CITIES_BUTTON': 'Cities',
    	'SETTINGS_BUTTON': 'Settings',
    	'ABOUT_BUTTON': 'About'
    });
    $translateProvider
    .uniformLanguageTag('bcp47')
    .determinePreferredLanguage();
}]);
