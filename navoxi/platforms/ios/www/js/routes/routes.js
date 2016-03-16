navoxi.config(['$routeProvider', function($routeProvider) {
	    $routeProvider
	    .when('/accueil', {
	    	templateUrl: 'views/accueil.html',
	    	controller: 'accueilCtrl'
	    })
	    .when('/apropos', {
	    	templateUrl: 'views/apropos.html',
	    	controller: 'aproposCtrl'
	    })
	    .when('/favoris', {
	    	templateUrl: 'views/favoris.html',
	    	controller: 'favorisCtrl'
	    })
	    .when('/guidage', {
	    	templateUrl: 'views/guidage.html',
	    	controller: 'guidageCtrl'
	    })
	    .when('/historique', {
	    	templateUrl: 'views/historique.html',
	    	controller: 'historiqueCtrl'
	    })
	    .when('/villes', {
	    	templateUrl: 'views/villes.html',
	    	controller: 'villesCtrl'
	    })
	    .when('/navigation', {
	    	templateUrl: 'views/navigation.html',
	    	controller: 'navigationCtrl'
	    })
	    .when('/reglages', {
	    	templateUrl: 'views/reglages.html',
	    	controller: 'reglagesCtrl'
	    })
	    .when('/typetrajet', {
	    	templateUrl: 'views/typetrajet.html',
	    	controller: 'typetrajetCtrl'
	    })
	    .when('/notifications', {
	    	templateUrl: 'views/notifications.html',
	    	controller: 'notificationsCtrl'
	    })
	    .otherwise({redirectTo: '/navigation'});
}]);