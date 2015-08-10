(function(){

  'use strict';

  /**
   * @ngdoc function
   * @name almostApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the almostApp
   */
  angular.module('hotpotApp')
    .controller('MainCtrl',['$mdSidenav','$state', MainCtrl]);

  function MainCtrl($mdSidenav, $state) {
    var self = this;

    /**
     * Hide or Show the 'left' sideNav area
     */
    self.toggleSideMenu = toggleSideMenu;

    self.goToState = goToState;

    function toggleSideMenu() {
      //var pending = $mdBottomSheet.hide() || $q.when(true);

      //pending.then(function(){
      //  $mdSidenav('leftSideNav').toggle();
      //});
      $mdSidenav('leftSideNav').toggle();
    }

    function goToState(stateName) {
      $state.go(stateName);
    }


  }
})();

