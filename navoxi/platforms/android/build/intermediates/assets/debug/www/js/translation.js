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
    	'CITIES_TITLE': 'Villes',
    	'SETTINGS_TITLE': 'Préférences',
    	'SETTINGS_HOMEDETECTION': 'Détection de mon domicile',
    	'SETTINGS_HOMEDETECTION_BUTTON': 'Démarrer',
    	'SETTINGS_EXITTYPE': 'Sortie de station',
    	'SETTINGS_EXITTYPE_RADIO_AUTO': 'Automatique',
    	'SETTINGS_EXITTYPE_RADIO_AUTO_LABEL': 'Me guider vers la sortie la plus proche',
    	'SETTINGS_EXITTYPE_RADIO_MANUAL': 'Manuelle',
    	'SETTINGS_EXITTYPE_RADIO_MANUAL_LABEL': 'Me laisser le choix de la sortie'
    });
    $translateProvider.translations('en', {
    	'INSTALL_BUTTON':'Add',
    	'UNINSTALL_BUTTON': 'Remove',
    	'NAVIGATION_BUTTON': 'Navigation',
    	'CITIES_BUTTON': 'Cities',
    	'SETTINGS_BUTTON': 'Settings',
    	'ABOUT_BUTTON': 'About',
    	'HOME_TITLE': 'Navoxi',
    	'HOME_BUTTON': 'Accueil',
    	'NAVIGATION_TITLE': 'Navigation',
    	'NAVIGATION_NEWTRIP_BUTTON': 'New trip',
    	'NAVIGATION_HISTORY_BUTTON': 'History',
    	'NAVIGATION_FAVORITES_BUTTON': 'Favorites',
    	'NAVIGATION_HOME_BUTTON': 'Home',
    	'CITIES_TITLE': 'Cities',
    	'SETTINGS_TITLE': 'Settings',
    	'SETTINGS_HOMEDETECTION': 'Home detection',
    	'SETTINGS_HOMEDETECTION_BUTTON': 'Start',
    	'SETTINGS_EXITTYPE': 'Station exit',
    	'SETTINGS_EXITTYPE_RADIO_AUTO': 'Automatic',
    	'SETTINGS_EXITTYPE_RADIO_AUTO_LABEL': 'Guide me towards the closest exit',
    	'SETTINGS_EXITTYPE_RADIO_MANUAL': 'Manual',
    	'SETTINGS_EXITTYPE_RADIO_MANUAL_LABEL': 'Let me choose my exit'
    });
    $translateProvider
    .uniformLanguageTag('bcp47')
    .determinePreferredLanguage();
    $translateProvider.fallbackLanguage('en');
}]);
