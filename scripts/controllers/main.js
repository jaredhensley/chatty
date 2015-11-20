'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ($scope, MessageService) {

    //hmm seems duplicated from messageCtrl, dblcheck this later
    function getMessages() {
      MessageService.getMessages().then(function (response) {
        $scope.messages = response.data;
      });
    }

    $scope.addMessage = function (message) {
      console.log('test cakes');
      console.log($scope.newMessage);
      if (message) {
        MessageService.addMessage(message).then(function (response) {
          getMessages();
          $scope.newMessage = '';
        });
      }
    };

    getMessages();

  });