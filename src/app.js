// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('skedg', ['ionic', 'monospaced.elastic'])

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
    controller: 'SplashpageCtrl as vmSplash'
  })

  .state('title', {
    url: '/title',
    templateUrl: 'states/title/title.html',
    controller: 'TitleCtrl as vmTitle'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'states/menu/menu.html',
    controller: 'MenuCtrl as vmMenu'
  })

  .state('app.weeks', {
    url: '/weeks',
    views: {
      'menuContent': {
        templateUrl: 'states/weeks/weeks.html',
        controller: 'WeeksCtrl as vmWeeks'
      }
    }
  })

  .state('app.days', {
      url: '/days/:week',
      views: {
        'menuContent': {
          templateUrl: 'states/days/days.html',
          controller: 'DaysCtrl as vmDays'
        }
      }
    })
    .state('app.hours', {
      url: '/hours/:day',
      views: {
        'menuContent': {
          templateUrl: 'states/hours/hours.html',
          controller: 'HoursCtrl as vmHours'
        }
      }
    })

  .state('app.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'states/account/account.html',
        controller: 'AccountCtrl as vmAccount'
      }
    }
  })

  .state('app.quickView', {
    url: '/quickview',
    views: {
      'menuContent': {
        templateUrl: 'states/quickView/quickView.html',
        controller: 'QuickViewCtrl as vmQuickView'
      }
    }
  })

  .state('app.contacts', {
    url: '/contacts',
    views: {
      'menuContent': {
        templateUrl: 'states/contacts/contacts.html',
        controller: 'ContactsCtrl as vmContacts'
      }
    }
  })

  .state('app.recentPlans', {
    url: '/recentPlans',
    views: {
      'menuContent': {
        templateUrl: 'states/recentPlans/recentPlans.html',
        controller: 'RecentPlansCtrl as vmRecent'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
