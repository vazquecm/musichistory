$(document).ready(function() {

	var songListContainer = $("#song-list");

	function dataConverter(rawJSONData) {
		var songArray = rawJSONData.songs;

		for (var i = 0; i < songArray.length; i++) {
			var currentSong = songArray[i];
			songListContainer.append("<h2>"+currentSong.title+"</h2>"); 
			songListContainer.append("<p>"+currentSong.artist+"</p>"); 
			songListContainer.append("<p>"+currentSong.album+"</p>"); 
			console.log(currentSong);
		};
	}

  $.ajax({
    url: "data/songs.json"
  }).done(dataConverter);


});