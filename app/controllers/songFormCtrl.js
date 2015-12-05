/// this module allows the user to add a title, artist, and album of their choice, the added choices load to the DOM and to firebase as well ///

app.controller("songFormCtrl", ["$scope", "$firebaseArray", 
    function($scope, $firebaseArray) {

      /// referencing firebase data ///
      var ref = new Firebase("https://boiling-fire-9070.firebaseio.com/songs");

      /// We synchronize a list of messages into a read-only array by using the $firebaseArray service and then assigning the array to $scope
      $scope.newMessageText = "";
      $scope.songs = $firebaseArray(ref);
      $scope.newSong = { title: "", artist: "", album: ""};

      /// this function allows the user to add their choices to their collection ///
      $scope.addSong = function() {
        $scope.songs.$add ({
        title: $scope.newSong.title,
        artist: $scope.newSong.artist,
        album: $scope.newSong.album,
      })

    };  
        
  }
  
]);