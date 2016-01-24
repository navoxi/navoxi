navoxi.config(['$translateProvider', function($translateProvider) {
    $translateProvider.translations('fr-FR', {
    	'INSTALL_BUTTON':'Ajouter',
    	'UNINSTALL_BUTTON': 'Supprimer',
    	'NAVIGATION_BUTTON': 'Navigation',
    	'CITIES_BUTTON': 'Villes',
    	'SETTINGS_BUTTON': 'Réglages',
    	'ABOUT_BUTTON': 'À propos',
    	'HOME_TITLE': 'Navoxi',
    	'HOME_BUTTON': 'Accueil',
    	'NAVIGATION_TITLE': 'Navigation',
    	'NAVIGATION_NEWTRIP_BUTTON': 'Nouveau trajet',
    	'NAVIGATION_HISTORY_BUTTON': 'Historique',
    	'NAVIGATION_FAVORITES_BUTTON': 'Favoris',
    	'CITIES_TITLE': 'Villes'
    });
    $translateProvider.translations('en', {
    	'INSTALL_BUTTON':'Add',
    	'UNINSTALL_BUTTON': 'Remove',
    	'NAVIGATION_BUTTON': 'Navigation',
    	'CITIES_BUTTON': 'Cities',
    	'SETTINGS_BUTTON': 'Settings',
    	'ABOUT_BUTTON': 'About',
    	'HOME_TITLE': 'Navoxi',
    	'NAVIGATION_TITLE': 'Navigation',
    	'NAVIGATION_NEWTRIP_BUTTON': 'New trip',
    	'NAVIGATION_HISTORY_BUTTON': 'History',
    	'NAVIGATION_FAVORITES_BUTTON': 'Favorites',
    	'NAVIGATION_HOME_BUTTON': 'Home',
    	'CITIES_TITLE': 'Cities'
    });
    $translateProvider
    .uniformLanguageTag('bcp47')
    .determinePreferredLanguage();
    $translateProvider.fallbackLanguage('en');
}]);
