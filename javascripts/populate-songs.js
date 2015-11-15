define(["jquery", "firebase", "hbs!../templates/songs"], 
  function($, firebase, songs)  {

    // var newTitle;
    // var newArtist;
    // var newAlbum;

// return {
//      getAjaxData: function(dataConverter) {
      
//           $.ajax({
//              url: "https://boiling-fire-9070.firebaseio.com/.json",
//              method: "GET"
//           }).done(function(songList){
//               dataConverter(songList);
//               newSong = songList; 
//               console.log(songList);   
//             });
//      },
    //     getNewSong: function() {
    //       return newTitle;
    //       return newArtist;
    //       return newAlbum;
    //     }
    // };
  
    //   $.ajax({
    //   url: "http://my.firebase-app.com/songs/" + songKey + "/.json",
    //   method: "DELETE"
    // }).done(function() {
    //   console.log("Yay, it deleted!");
    // });


   /// create a reference to firebase, don't use the JSON file extension ////
   var myFirebaseRef = new firebase("https://boiling-fire-9070.firebaseio.com");

   /// listens for when anything changes on the "songs" key ///
    myFirebaseRef.child("songs").on("value", function(snapshot) {
        console.log("working?");

        // /// store the entire songs key in a local variable and populate the list in the DOM ///
        var allSongsObject = snapshot.val();
        $("#right-side").html(songs({songs:allSongsObject}));
          console.log("working now?");

        /// populating the option box with all the artists name from the firebase file ///   
        $("#artist option:selected").html(songs({songs:allSongsObject}));  
          console.log();

    })
});