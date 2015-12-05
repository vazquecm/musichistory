// this module is listening for the result of the promise (calling from songFactory.js) and then executing the resolve from it //

app.controller("songCtrl", ["$scope", "$firebaseArray", 
  function($scope, $firebaseArray) {

  // Just like in the RequireJS version of Music History, make a reference
    var ref = new Firebase("https://boiling-fire-9070.firebaseio.com/songs");
    syncObject.$bindTo($scope, "songs");

  // Instead of snapshot.val(), use this syntax to get songs
    $scope.songs = $firebaseArray(ref);
    console.log("songs", songs);

  }
]);
  