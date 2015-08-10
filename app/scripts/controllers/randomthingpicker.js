(function(){

  'use strict';

  /**
   * @ngdoc function
   * @name hotpotApp.controller:RandomThingPickerCtrl
   * @description
   * # RandomThingPickerCtrl
   * Controller of the hotpotApp
   */
  angular.module('hotpotApp')
    .controller('RandomThingPickerCtrl', ['$scope', '$firebaseAuth','$timeout', RandomThingPickerCtrl]);

  function RandomThingPickerCtrl($scope, $firebaseAuth, $timeout) {
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
    self.add = add;

    /**
     * Bound o the trash can icon, delete an option from the array.
     * @param id
     */
    self.delete = deleteOption;

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
    self.pickRandom = pickRandom;

    /**
     * Resets the app state to pristine, no options, no picks.
     */
    self.reset = reset;


    function pickRandom() {
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
    }

    function add(){
      if (self.newOption.description === '') {
        return;
      }
      // Add to array.
      self.options.push(self.newOption);
      self.newOption = generateNewOption();
    }

    function reset() {
      self.options = [];
      optionCount = 0;
      self.newOption  = generateNewOption();
      self.pick = undefined;
      self.hasNotPicked = true;
      self.pickCount = 0;
    }

    function deleteOption(id) {
      var idx = self.options.map(function(e){return e.id;}).indexOf(id);
      self.options.splice(idx,1);
    }
  }

})();
