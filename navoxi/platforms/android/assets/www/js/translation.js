navoxi.config(['$translateProvider', function($translateProvider) {
    $translateProvider.translations('fr-FR', {
    	'INSTALL_BUTTON':'Ajouter',
    	'UNINSTALL_BUTTON': 'Supprimer',
    	'NAVIGATION_BUTTON': 'Navigation',
    	'CITIES_BUTTON': 'Villes',
    	'SETTINGS_BUTTON': 'Réglages',
    	'ABOUT_BUTTON': 'À propos',
    	'HOME_TITLE': 'Navoxi'
    });
    $translateProvider.translations('fr-CH', {
    	'INSTALL_BUTTON':'Ajouter',
    	'UNINSTALL_BUTTON': 'Supprimer',
    	'NAVIGATION_BUTTON': 'Navigation',
    	'CITIES_BUTTON': 'Villes',
    	'SETTINGS_BUTTON': 'Réglages',
    	'ABOUT_BUTTON': 'À propos',
    	'HOME_TITLE': 'Navoxi'
    });
    $translateProvider.translations('en', {
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
    $translateProvider.fallbackLanguage('en');
}]);
