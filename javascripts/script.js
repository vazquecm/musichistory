define(["jquery", "populate-songs", "get-more-songs", "hbs"], 
  function($, populateSongs, getMoreSongs, hbs) { 

	var listMusicContainer = $(".list-Music");
	var addButton = $ ("#add-music");
	var viewButton = $ ("#view-music");
	var addSection = $ ("#left-side");
	var viewSection = $ ("#right-side");
	var addingButton = $ ("#adding");
	var listSection = $ ("#delete");
	var moreSongs = $ ("#song-list");

/// this lets the view section stay on page when it is first opened and viewed //
	addSection.hide();
/// when the add music button is clicked, the view music button is hidden from the user ///
	addButton.click(function() {
		viewSection.hide();
		addSection.show();
	});
/// when the view music button is clicked, the add music button is hidden from the user ///
	viewButton.click(function() {
		addSection.hide();
		viewSection.show();
	});

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

			listMusicContainer.append(songElementString); 
			console.log(currentSong);
		}
	}	
	populateSongs.getAjaxData(dataConverter);
	getMoreSongs.getAjaxData(dataConverter);

/// when the delete button is clicked, the row of title, artist, and album is deleted from the view music form ///
		listSection.click(function() {
		});

///  function that adds more music from the two JSON files ///



});