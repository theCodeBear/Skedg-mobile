// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('skedg', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('splashpage', {
    url: '/',
    templateUrl: 'states/splashpage/splashpage.html',
    controller: 'SplashpageCtrl'
  })

  .state('title', {
    url: '/title',
    templateUrl: 'states/title/title.html',
    controller: 'TitleCtrl'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'states/menu/menu.html',
    controller: 'MenuCtrl'
  })

  .state('app.weeks', {
    url: '/weeks',
    views: {
      'menuContent': {
        templateUrl: 'states/weeks/weeks.html',
        controller: 'WeeksCtrl'
      }
    }
  })

  .state('app.days', {
      url: '/days',
      views: {
        'menuContent': {
          templateUrl: 'states/days/days.html',
          controller: 'DaysCtrl'
        }
      }
    })
    .state('app.hours', {
      url: '/hours',
      views: {
        'menuContent': {
          templateUrl: 'states/hours/hours.html',
          controller: 'HoursCtrl'
        }
      }
    })

  .state('app.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'states/account/account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('app.quickView', {
    url: '/quickview',
    views: {
      'menuContent': {
        templateUrl: 'states/quickView/quickView.html',
        controller: 'QuickViewCtrl'
      }
    }
  })

  .state('app.contacts', {
    url: '/contacts',
    views: {
      'menuContent': {
        templateUrl: 'states/contacts/contacts.html',
        controller: 'ContactsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
