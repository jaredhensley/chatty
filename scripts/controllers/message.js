'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, messageService) {
    $scope.messages = [];

    $scope.getMessages = function () {
      messageService.getMessages().then(function (res) {
        console.log(res);
        $scope.messages = res.data;
      });

    }
  });