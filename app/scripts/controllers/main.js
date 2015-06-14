'use strict';

/**
 * @ngdoc function
 * @name almostApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the almostApp
 */
angular.module('almostApp')
  .controller('MainCtrl',['$scope', '$firebaseAuth', function ($scope, $firebaseAuth) {
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
  }]);
