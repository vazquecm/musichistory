define(["jquery"], function($) {

$("#adding").click(function(){
    var addedArtist = $("#artist").val();
    var addedSong = $("#song").val();
    var addedAlbum = $("#album").val();
    console.log("user info", addedArtist, addedSong, addedAlbum);
    var currentdate = new Date();
    console.log("looking for date", currentdate);
    var newSong = {
                      title: addedSong,
                      artist: addedArtist,
                      album: addedAlbum
                  
    };
    console.log("add-song.js", newSong);


    $.ajax({
      url: "https://boiling-fire-9070.firebaseio.com/songs.json",
      key: "value",
      method: "POST",
      data: JSON.stringify(newSong)
    }).done(function() {
      console.log("something in firebase");
    });




  });
 







// $.ajax({
//   url: "https://boiling-fire-9070.firebaseio.com/total-songs.json"
//   });

//   key: "value",  
//   method: "POST",
//   data: JSON.stringify(newSong)
//   .done(function(addedSong) {
//   title = "";
//   artist = "";
//   album = "";
//   console.log("your new song is", addedSong)
//  })

// });  



});