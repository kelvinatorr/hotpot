(function(){

  'use strict';

  /**
   * @ngdoc overview
   * @name almostApp
   * @description
   * # almostApp
   *
   * Main module of the application.
   */
  angular
    .module('hotpotApp', ['firebase', 'ngMaterial', 'ui.router']);

  angular
    .module('hotpotApp').config(['$mdThemingProvider', '$mdIconProvider','$stateProvider','$urlRouterProvider','$urlMatcherFactoryProvider', AppConfig
  ]);

  //angular
  //  .module('hotpotApp').run(['$log',function($log){
  //  $log.debug('starterApp + ngMaterial running kelvins...');
  //}]);

  function AppConfig($mdThemingProvider, $mdIconProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider){

    $mdIconProvider
      .defaultIconSet('images/material-icons/svg-sprite-maps.svg', 128)
      .icon('menu', 'images/material-icons/menu.svg', 24)
      //.iconSet("glyphicons", "fonts/glyphicons-halflings-regular.svg", 24);
      .icon('call', 'images/material-icons/ic_call_24px.svg', 24)
      .iconSet('action', 'images/material-icons/action-icons.svg', 24)
      .iconSet('alert', 'images/material-icons/alert-icons.svg', 24)
      .iconSet('av', 'images/material-icons/av-icons.svg', 24)
      .iconSet('communication', 'images/material-icons/communication-icons.svg', 24)
      .iconSet('content', 'images/material-icons/content-icons.svg', 24)
      .iconSet('device', 'images/material-icons/device-icons.svg', 24)
      .iconSet('editor', 'images/material-icons/editor-icons.svg', 24)
      .iconSet('file', 'images/material-icons/file-icons.svg', 24)
      .iconSet('hardware', 'images/material-icons/hardware-icons.svg', 24)
      .iconSet('icons', 'images/material-icons/icons-icons.svg', 24)
      .iconSet('image', 'images/material-icons/image-icons.svg', 24)
      .iconSet('maps', 'images/material-icons/maps-icons.svg', 24)
      .iconSet('navigation', 'images/material-icons/navigation-icons.svg', 24)
      .iconSet('notification', 'images/material-icons/notification-icons.svg', 24)
      .iconSet('social', 'images/material-icons/social-icons.svg', 24)
      .iconSet('toggle', 'images/material-icons/toggle-icons.svg', 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue')
      .accentPalette('pink');

    $stateProvider
      .state('app', {
        url: '/app',
        templateUrl: 'views/main.html',
        abstract: true
        //controller: 'LoginCtrl'
        //controllerAs: 'ctrl'
      })
      .state('randomThingPicker', {
        parent: 'app',
        url: '/randomThingPicker',
        templateUrl: 'views/randomthingpicker.html',
        controller: 'RandomThingPickerCtrl',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/randomThingPicker');
    $urlMatcherFactoryProvider.caseInsensitive(true);
    // ignore trailing slashes.
    $urlMatcherFactoryProvider.strictMode(false);

  }

})();
