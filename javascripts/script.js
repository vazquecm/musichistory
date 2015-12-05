$(document).ready(function() {

	var songListContainer = $("#song-list");

	function dataConverter(rawJSONData) {
		var songArray = rawJSONData.songs;

		var songElementString = "";

		for (var i = 0; i < songArray.length; i++) {
			var currentSong = songArray[i];
  
			songElementString = "<div>";
			songElementString += "<h3>"+currentSong.title+"</h3>";
			songElementString += "<p>"+currentSong.artist+"</p>";
			songElementString += "<p>"+currentSong.album+"</p>";
			songElementString += "<button class='delete'>Delete</button>";
			songElementString += "</div>";

			songListContainer.append(songElementString); 
			console.log(currentSong);
		};
	}

		$scope.songArray = songListContainer.append(songElementString);
		console.log("songArray", songArray); 
	
	
});

// Delete button on "list music" song row  //
	$(document).on('click', '.delete', function(event) {
		event.target.remove("song-list");
		console.log('click', event);
});	
