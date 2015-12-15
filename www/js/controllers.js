angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($ionicPlatform, $cordovaSms) {
    var vm = this;
    vm.send = function () {
      $ionicPlatform.ready(function () {
        console.log('$ionicPlatform.ready');
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };
        $cordovaSms
          .send('', 'SMS content', options)
          .then(function () {
            alert('Success! SMS was sent');
            console.log('Success! SMS was sent');
          }, function (error) {
            alert('sms error: ' + error);
            console.error('sms error', error);
          });
      });
    }
  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
