navoxi.config(['$translateProvider', function($translateProvider) {
	    $translateProvider.translations('fr', {'TITLE':'Bonjour à toi'});
	    $translateProvider.translations('en', {'TITLE':'Hello you'});
	    $translateProvider.preferredLanguage('fr');
	}]);
