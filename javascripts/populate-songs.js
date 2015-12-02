define(["jquery", "firebase", "hbs!../templates/songs", "hbs!../templates/artist", "hbs!../templates/album", "hbs!../templates/title", "hbs!../templates/filterSongs"], 
  function($, firebase, songsRightSideTemplate, artistOptionBoxTemplate, albumOptionBoxTemplate, titleOptionBoxTemplate, filterSongs)  {

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
    });

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

    ///// checks to see if each object in firebase object of "songs" has a key ///
    for (var songsKey in newSongList) {
      console.log("songs", newSongList);
      ///// checks to see if each object has key-value pairs ///
      console.log("newSongList[songsKey]", newSongList[songsKey]);
      if (newSongList.hasOwnProperty(songsKey)) {
        var thisSong = newSongList[songsKey];
        console.log(songsKey);

    /// if keys match to user selection then the selected choice is added to the DOM
        newSongList.artist === selectArtist;
          console.log("selectArtist", selectArtist);
          newSongList.album === selectAlbum;
          console.log("selectAlbum", selectAlbum);
          newSongList.title === selectTitle;
          console.log("selectTitle", selectTitle);     
        }
      }

    /// this function allows the user to filter only the options selected from the selection boxes and displays them on the page.  
      $("body").on("click","#filter", function() {
        console.log("lets filter some options");
        var filterSongList = {};
        filterSongList.artist = selectArtist;
        filterSongList.album = selectAlbum;
        filterSongList.title = selectTitle;
        console.log("filterSongList", filterSongList);

        require(["hbs!../templates/filterSongs"], function(template) {
          $("#right-side").html(template(filterSongList));

          })
      })
    ///this function will allow the user to delete the selection of choice off of the main page.  need to get the "parent" of the delete button and use it to delete the selected options. only removes from the DOM.
      $("body").on("click","#delete", function() {
        console.log("are we deleting?");
        $(this).parent().remove();

          })

      })      
});