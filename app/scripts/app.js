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
    .module('hotpotApp', ['firebase', 'ngMaterial']);

  angular
    .module('hotpotApp').config(['$mdThemingProvider', '$mdIconProvider', AppConfig
  ]);

  angular
    .module('hotpotApp').run(['$log',function($log){
    $log.debug('starterApp + ngMaterial running kelvins...');
  }]);

  function AppConfig($mdThemingProvider, $mdIconProvider){

    $mdIconProvider
      .defaultIconSet('images/svg-sprite-maps.svg', 128)
      .icon('menu', 'images/material-icons/menu.svg', 24)
      //.iconSet("glyphicons", "fonts/glyphicons-halflings-regular.svg", 24);
      .icon('call', 'images/ic_call_24px.svg', 24)
      .iconSet('action', 'images/action-icons.svg', 24)
      .iconSet('alert', 'images/alert-icons.svg', 24)
      .iconSet('av', 'images/av-icons.svg', 24)
      .iconSet('communication', 'images/communication-icons.svg', 24)
      .iconSet('content', 'images/content-icons.svg', 24)
      .iconSet('device', 'images/device-icons.svg', 24)
      .iconSet('editor', 'images/editor-icons.svg', 24)
      .iconSet('file', 'images/file-icons.svg', 24)
      .iconSet('hardware', 'images/hardware-icons.svg', 24)
      .iconSet('icons', 'images/icons-icons.svg', 24)
      .iconSet('image', 'images/image-icons.svg', 24)
      .iconSet('maps', 'images/maps-icons.svg', 24)
      .iconSet('navigation', 'images/navigation-icons.svg', 24)
      .iconSet('notification', 'images/notification-icons.svg', 24)
      .iconSet('social', 'images/social-icons.svg', 24)
      .iconSet('toggle', 'images/toggle-icons.svg', 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue')
      .accentPalette('pink');

  }

})();
