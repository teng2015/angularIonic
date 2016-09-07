angular.module('starter.controllers', [])

 .controller('DashCtrl', function($scope,$ionicSlideBoxDelegate) {
   $scope.nextSlide = function() {
     $ionicSlideBoxDelegate.next();
   }

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl' , function($scope) {
 $scope.settings = {
    enableFriends: true
  };
})


.controller('jiaxinlong', function($scope, Chats,$ionicTabsDelegate) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

})


.controller('MyController', function($scope,$http) {

	  $scope.doRefresh = function() {
		$scope.items = null;
		$http.get('/homepage/init')
		.success(function(data) {
		  $scope.items = data.prizes;
		})
     .finally(function() {
       // 停止广播ion-refresher
       $scope.$broadcast('scroll.refreshComplete');
     });
  };


})

.controller('MyCtrl', function($scope, $ionicTabsDelegate) {
    $scope.selectTabWithIndex = function(index) {
      $ionicTabsDelegate.select(index);
    }
  })
.controller('ContentController', function($scope, $ionicSideMenuDelegate) {
	   $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
  };



});

