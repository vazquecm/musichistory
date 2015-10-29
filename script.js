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

	$.ajax({/**/
		url: "data/songs.json"
	}).done(dataConverter);

	
});

	$(document).on('click', '.delete', function(event) {
		// event.target.remove(button class = );
		console.log('click', event);
});	


// Delete button on "list music" song row  //

















// Button for "more-songs"  //

// var moreSongs = "more-songs";

// 	$(function(){
//     	$("<button>Delete</button>").click(function(){
//         var moreSongs= $("<input type='button' value='More Songs'>");
//         console.log(moreSongs);
//     });
// });

// 	$.ajax({
//     url: "data/more-songs.json"
//   }).done(dataConverter);

// });


// Adding music //

// 	var addMusic = "Add Music";

// 	$("#link-add").click(function(){
// 	var addMusic = $(addMusic);
// 	console.log(addMusic); 	    
// });


















