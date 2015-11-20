'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ($scope, messageService) {

    //hmm seems duplicated from messageCtrl, dblcheck this later
    console.log('HELLOOoo');

    function getM() {
      messageService.getMessages().then(function (response) {
        $scope.messages = response.data;
      });
    }

    $scope.addMessage = function (message) {
      console.log('test cakes');
      if (message) {
        messageService.addMessage(message).then(function (response) {
          getM();
        });
      }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    getM();

  });