// notice the new syntax used...since I'm including one of my own dependencies, I need to include each one in an arry of strings (like Requirejs) and have a matching argument in the callback function as well /// 

app.controller("songListCtrl", ["$scope", "$firebaseArray", 
    function($scope, $firebaseArray) {

    	/// this is referencing the firebase database ///
      var ref = new Firebase("https://boiling-fire-9070.firebaseio.com/songs");

      /// this is turning the objects into an array from firebase and then sending the array back // Instead of snapshot.val(), use this syntax to get songs/// 
      $scope.songs = $firebaseArray(ref);

    }
  ]);   