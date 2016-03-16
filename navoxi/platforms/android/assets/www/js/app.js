var navoxi = angular.module('navoxi', ['ionic', 'ngRoute', 'pascalprecht.translate', 'ui.bootstrap']);

navoxi.controller('indexCtrl', function($scope, nvxTools) {
  var setAriaLabels = function(array, message, index) {
    for (var i = 0; i < array.length; i++)
    {
      if (i == index)
        array[i]['ariaLabel'] = message;
      else
        array[i]['ariaLabel'] = '';
    }
  };

  $scope.nvxTools = nvxTools;
  $scope.indexSelected = 0;
  $scope.navTabs = [
    {
      href: "#/navigation",
      domId: 'home-navigation',
      url: 'img/navigation.png',
      name: 'NAVIGATION_BUTTON',
      ariaLabel: 'Sélectionné'
    },
    {
      href: "#/favoris",
      domId: 'home-favorites',
      url: 'img/favorites.png',
      name: 'FAVORITES_BUTTON',
      ariaLabel: ''
    },
    {
      href: "#/historique",
      domId: 'home-history',
      url: 'img/history.png',
      name: 'HISTORY_BUTTON',
      ariaLabel: ''
    },
    {
      href: "#/reglages",
      domId: 'home-settings',
      url: 'img/settings.png',
      name: 'SETTINGS_BUTTON',
      ariaLabel: ''
    },
    {
      href: "#/villes",
      domId: 'home-cities',
      name: 'CITIES_BUTTON',
      url: 'img/cities.png',
      ariaLabel: ''
    },
    {
      href: "#/apropos",
      domId: 'home-about',
      name: 'ABOUT_BUTTON',
      url: 'img/about.png',
      ariaLabel: ''
    }
  ];

  $scope.goTo = function(index, id, path, isBack) {
    nvxTools.goTo(index, id, path, isBack);
    if (index)
      $scope.indexSelected = index;
    setAriaLabels($scope.navTabs, 'Sélectionné', $scope.indexSelected)
  };
});

navoxi.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
