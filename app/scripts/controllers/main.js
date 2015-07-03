'use strict';

/**
 * @ngdoc function
 * @name almostApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the almostApp
 */
angular.module('hotpotApp')
  .controller('MainCtrl',['$scope', '$firebaseAuth','$mdSidenav', '$mdBottomSheet', '$q','$timeout','$mdMedia', function ($scope, $firebaseAuth, $mdSidenav, $mdBottomSheet, $q, $timeout, $mdMedia) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var ref = new Firebase('https://hotpot.firebaseio.com');
    var auth = $firebaseAuth(ref);

    console.log('Running controller');

    $scope.login = function() {
      console.log('Trying to login');
      $scope.authData = null;
      $scope.error = null;

      auth.$authWithOAuthRedirect('google', {scope:'email'}).then(function(authData) {
        console.log('Success!');
        $scope.authData = authData;
      }).catch(function(error) {
        $scope.error = error;
      });
    };

    //$scope.login();
    var self = this;

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    self.toggleSideMenu = function() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('leftSideNav').toggle();
      });
    };

    self.options = [];

    var optionCount = 0;

    /**
     * Helper function that generates a newOption Model
     * @returns {{id: number, description: string}}
     */
    var generateNewOption = function() {
      optionCount += 1;
      return {
        id: optionCount,
        description: ''
      };
    };

    /**
     * Bound to the input box, represents new options for users to enter
     * @type {{id: number, description: string}}
     */
    self.newOption  = generateNewOption();

    /**
     * Bound to the add button, adds the option that the user typed in to the array
     *
     */
    self.add = function(){
      if (self.newOption.description === '') {
        return;
      }
      // Add to array.
      self.options.push(self.newOption);
      self.newOption = generateNewOption();
    };

    /**
     * Bound o the trash can icon, delete an option from the array.
     * @param id
     */
    self.delete = function(id) {
      var idx = self.options.map(function(e){return e.id;}).indexOf(id);
      self.options.splice(idx,1);
    };

    /**
     * True if the pick button has been pressed.
     * @type {boolean}
     */
    self.hasNotPicked = true;

    /**
     * The number of times the pick button has been pressed.
     * @type {number}
     */
    self.pickCount = 0;

    /**
     * The option that was randomly picked.
     */
    self.pick = '';

    self.picking = false;

    /**
     * Bound to the pick button, selects an option from the options array randomly
     */
    self.pickRandom = function() {
      // clear the pick.
      self.pick  = '';
      // disable the pick button
      self.picking = true;
      $timeout(function(){
        self.pick = self.options[Math.floor(Math.random() * self.options.length)];
        if(self.hasNotPicked) {
          self.hasNotPicked = false;
        }
        self.pickCount += 1;
        self.picking = false;
      }, 500);
    };

    /**
     * Resets the app state to pristine, no options, no picks.
     */
    self.reset = function() {
      self.options = [];
      optionCount = 0;
      self.newOption  = generateNewOption();
      self.pick = undefined;
      self.hasNotPicked = true;
      self.pickCount = 0;
    };

    self.isNotPhoneScreen = false;
    $scope.$watch(function() { return $mdMedia('gt-sm'); }, function(value) {
      self.isNotPhoneScreen = value;
    });

  }]);
