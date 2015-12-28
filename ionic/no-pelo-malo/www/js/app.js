// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers', 'ngOpenFB'])

.run(function($ionicPlatform, ngFB ) {
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

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.scan', {
    url: '/playlists/1',
    views: {
      'menuContent': {
        templateUrl: 'partials/scan.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

   .state('app.game', {
      url: '/playlists/2',
      views: {
        'menuContent': {
          templateUrl: 'partials/game.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

   .state('app.achievements', {
      url: '/playlists/3',
      views: {
        'menuContent': {
          templateUrl: 'partials/achievements.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.settings', {
      url: '/playlists/4',
      views: {
        'menuContent': {
          templateUrl: 'partials/settings.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

     .state('app.learnmore', {
      url: '/playlists/5',
      views: {
        'menuContent': {
          templateUrl: 'partials/learnmore.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
     /*  subpages - login, setup -- */
     .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.signup', {
      url: '/signup',
      views: {
        'menuContent': {
          templateUrl: 'partials/signup.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

    /* game pages */
    .state('app.game2', {
      url: '/game2',
      views: {
        'menuContent': {
          templateUrl: 'partials/game2.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
  ;/* keep semi-colon anchor here...  */



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
