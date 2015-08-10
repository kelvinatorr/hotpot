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
    .controller('MainCtrl',['$mdSidenav','$state','$scope', '$mdMedia', MainCtrl]);

  function MainCtrl($mdSidenav, $state, $scope, $mdMedia) {
    var self = this;

    /**
     * Hide or Show the 'left' sideNav area
     */
    self.toggleSideMenu = toggleSideMenu;

    self.goToState = goToState;

    self.isNotPhoneScreen = false;

    $scope.$watch(function() { return $mdMedia('gt-sm'); }, function(value) {
      self.isNotPhoneScreen = value;
    });

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

