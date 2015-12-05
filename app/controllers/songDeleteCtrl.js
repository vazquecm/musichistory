/// this module is deleting not only in the DOM but also in the firebase database that the user has ///


app.controller("songDeleteCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {

    $scope.searchTest = "";
    $scope.songs = []; 

    /// this is referencing the firebase database of songs //
    var ref = new Firebase("https://boiling-fire-9070.firebaseio.com/songs");
    /// turning the firebase objects into an array that angular fire likes ///
    $scope.songs = $firebaseArray(ref);

    /// this function is deleting the (song) in the songs database of firebase, the (song) represents the title,artist,album and then deletes each one only if clicked by user ///    
    $scope.deleteSong = function(song) {
        console.log("delete click");
        $scope.songs.$remove(song);
    };
 
}]);