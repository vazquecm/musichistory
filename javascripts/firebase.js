$("#addSong").click(function(e) {

	var newSong = {
		title: $("#title").val(),
		artist: $("#artist").val(),
		album: $("#album").val()
	}
})

$.ajax({
  url: "https://boiling-fire-9070.firebaseio.com/total-songs.json"
  key: "value",  
  method: "POST",
  data: JSON.stringify(newSong)
}).done(function(addedSong) {
  selectedTitle = "";
  selectedArtist = "";
  selectedAlbum = "";
  console.log("your new song is", addedSong)
})