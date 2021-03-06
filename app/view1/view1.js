'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.config(function($mdIconProvider) {
    $mdIconProvider
      .icon('share-arrow', 'img/icons/share-arrow.svg', 24)
      .icon('upload', 'img/icons/upload.svg', 24)
      .icon('copy', 'img/icons/copy.svg', 24)
      .icon('print', 'img/icons/print.svg', 24)
      .icon('hangout', 'img/icons/hangout.svg', 24)
      .icon('mail', 'img/icons/mail.svg', 24)
      .icon('message', 'img/icons/message.svg', 24)
      .icon('copy2', 'img/icons/copy2.svg', 24)
      .icon('facebook', 'img/icons/facebook.svg', 24)
      .icon('twitter', 'img/icons/twitter.svg', 24);
  })

.controller('View1Ctrl', function($scope, $timeout, $mdBottomSheet) {
    $scope.alert = '';

    $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'view1/bottom-sheet-list-template.html',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
}
})

.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
$scope.items = [
  { name: 'Share', icon: 'share-arrow' },
  { name: 'Upload', icon: 'upload' },
  { name: 'Copy', icon: 'copy' },
  { name: 'Print this page', icon: 'print' },
];
$scope.listItemClick = function($index) {
  var clickedItem = $scope.items[$index];
  $mdBottomSheet.hide(clickedItem);
};
})

.run(function($http, $templateCache) {
    var urls = [
      'img/icons/share-arrow.svg',
      'img/icons/upload.svg',
      'img/icons/copy.svg',
      'img/icons/print.svg',
      'img/icons/hangout.svg',
      'img/icons/mail.svg',
      'img/icons/message.svg',
      'img/icons/copy2.svg',
      'img/icons/facebook.svg',
      'img/icons/twitter.svg'
    ];
    angular.forEach(urls, function(url) {
      $http.get(url, {cache: $templateCache});
    });
  });
