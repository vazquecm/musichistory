define(["jquery", "firebase", "hbs!../templates/songs", "hbs!../templates/artist", "hbs!../templates/album", "hbs!../templates/title"], 
  function($, firebase, songsRightSideTemplate, artistOptionBoxTemplate, albumOptionBoxTemplate, titleOptionBoxTemplate)  {

   /// create a reference to firebase, don't use the JSON file extension ////
   var myFirebaseRef = new firebase("https://boiling-fire-9070.firebaseio.com");

   /// listens for when anything changes on the "songs" key ///
    myFirebaseRef.child("songs").on("value", function(snapshot) {
        console.log("working?");

        // /// store the entire songs key in a local variable and populate the list in the DOM ///
        var allSongsObject = snapshot.val();
        var newSongList = {songs:allSongsObject};
        console.log("newSongList", newSongList);

        // Loads all songs to page on page load
        $("#right-side").html(songsRightSideTemplate(newSongList));

        // Loads artist names to option dropdown box.
        $("#selectArtist").html(artistOptionBoxTemplate(newSongList));

        //Loads album names to option dropdown
        $("#selectAlbum").html(albumOptionBoxTemplate(newSongList));

      /// Loads title names to option dropdown 
        $("#selectTitle").html(titleOptionBoxTemplate(newSongList));

       /// when the user chooses an artist, it then populates into the DOM ///
        $("#selectArtist").change(function(event) {
        console.log("e.target.value", event.target.value);
          selectArtist = $("#selectArtist").val();
          console.log("selectArtist", selectArtist);

        ///// checks to see if each object in firebase object of "songs" has a key ///
          for (var songsKey in newSongList) {
            console.log("songs", newSongList);
        ///// checks to see if each object has key-value pairs ///
            console.log("newSongList[songsKey]", newSongList[songsKey]);
            if (newSongList.hasOwnProperty(songsKey)) {
             var thisSong = newSongList[songsKey];
              console.log(songsKey);

        /// checks to see if key value matches users choice of artist & pushes to array
            newSongList.artist === selectArtist
              console.log("selectArtist", selectArtist);
              newSongList.album === selectAlbum
              console.log("selectAlbum", selectAlbum);
              newSongList.title === selectTitle
              console.log("selectTitle", selectTitle);     
            }
       }
    })
        /// when the user chooses a album it then populates into the DOM ///
        $("#selectAlbum").change(function(event) {
          selectAlbum = $("#selectAlbum").val();
          console.log("selectAlbum", selectAlbum);
        }); 

        /// when the user chooses a title it then populates into the DOM ///
        $("#selectTitle").change(function(event) {
          selectTitle = $("#selectTitle").val();
          console.log("selectTitle", selectTitle);
        });
     })   
 });
