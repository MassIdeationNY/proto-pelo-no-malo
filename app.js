var app = angular.module("TemplateApp", ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {
  
  console.log("TemplateApp");
  
  $routeProvider.
    when('/', {
      templateUrl: 'partials/splash.html',
     // templateUrl: 'partials/menu.html',
      controller: 'HomeController'
    }).
    when('/tour', {
      templateUrl: 'partials/tour.html',
      controller: 'HomeController'
    }).
     when('/menu', {
      templateUrl: 'partials/menu.html',
      controller: 'HomeController'
    }).
      when('/scan', {
      templateUrl: 'partials/scan.html',
      controller: 'HomeController'
    }).
     when('/view', {
      templateUrl: 'partials/view.html',
      controller: 'HomeController'
    }).
     when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'HomeController'
    }).
     when('/signup', {
      templateUrl: 'partials/signup.html',
      controller: 'HomeController'
    }).
     when('/game', {
      templateUrl: 'partials/game.html',
      controller: 'HomeController'
    }).
     when('/game2', {
      templateUrl: 'partials/game2.html',
      controller: 'HomeController'
    }).
      when('/achievements', {
      templateUrl: 'partials/achievements.html',
      controller: 'HomeController'
    }).
       when('/settings', {
      templateUrl: 'partials/settings.html',
      controller: 'HomeController'
    }).
     when('/learnmore', {
      templateUrl: 'partials/learnmore.html',
      controller: 'HomeController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);//end route provider

app.controller("HomeController", function($scope,  $http, $location ){
  console.log("HomeController");

  var unitArray = [];
  //
  // cooper s - for when we need data
  //$http.get("http://khalidmills.com/hr/units.json").then(function(r){
  //$http.get("http://harlemreservations-campaigner.rhcloud.com/unit").then(function(r){
  //$http.get("http://127.0.0.1:8080/unit/").then(function(r){
  //});//end http get 

   $scope.go = function ( path ) {
        console.log("click for new view..." + path );
        $location.path( path );
      };

   $scope.pageClass = 'page-home';
   
})
.directive('helloWorld', function(){
  return {
    template: 'hello world!!!'
  }
});//end home controller
