/// this is the config page and holds the main dependencies that are used throughout the SPA, it also loads the partial html templates in the index when the add or list music views are clicked on ///

var app = angular.module ("app", ["firebase", "ngRoute"]);

  app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'songListCtrl'
      }).
      when('/songs/new', {
        templateUrl: 'partials/song-form.html',
        controller: 'songFormCtrl'
      }).
      when('/songs/detail/:songId', {
        templateUrl: 'partials/song-detail.html',
        controller: 'songDetailCtrl'
      }).
      when('/songs/delete', {
       templateUrl: 'partials/song-list.html',
       controller: 'songDeleteCtrl'
     })
      .otherwise('/songs/list');
  }]);  