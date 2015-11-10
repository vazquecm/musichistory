define(["jquery", "populate-songs", "get-more-songs", "hbs"], 
  function($, populateSongs, getMoreSongs, hbs) { 

/// variables used in the functions below ///
	var listMusicContainer = $("#songLists");
	var addButton = $ ("#add-music");
	var viewButton = $ ("#view-music");
	var addSection = $ ("#left-side");
	var viewSection = $ ("#right-side");
	var addingButton = $ ("#adding");
	var listSection = $ ("#delete");
	var moreSongs = $ ("#song-list");
	var artist = $("#artist");
	var song = $("#song");
	var album = $("#album");
	var deleteButton = $(".delete");

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
/// this function gathers data from the songs.json file and puts them into the DOM ///
	function dataConverter(rawJSONData) {
		var songArray = rawJSONData.songs;

		var songElementString = "";

		for (var i = 0; i < songArray.length; i++) {
			var currentSong = songArray[i];

			songElementString = "<div class='songTitle'> <li>";
			songElementString += currentSong.title + "</li> </ul> <li>";
			songElementString += currentSong.artist + "</li> <li>";
			songElementString += currentSong.album + "</li></ul>";
			songElementString += "<button class='delete'>Delete</button> </div>";

			listMusicContainer.append(songElementString); 
			console.log(currentSong);
		}
	}

/// this is the callback function for ajax ///		
	populateSongs.getAjaxData(dataConverter);
	moreSongs.click(function() {
		console.log("working");
		getMoreSongs.getAjaxData(dataConverter);
	});


/// this function adds the second JSON file of songs to the DOM ///
	function addingMoreSongs() {
		var addSongHTML
		addSongHTML = "<div class='songTitle'> <li>";
		addSongHTML += song.val() + "</li> </ul> <li>";
		addSongHTML += artist.val() + "</li> <li>";
		addSongHTML += album.val() + "</li> </ul>";
		addSongHTML += "<button class='delete'>Delete</button> </div>";

		listMusicContainer.append(addSongHTML); 
	}

/// the button at the end of the View Music form that adds more songs and also hides the add music form ///
	addingButton.click(function() {
		console.log("working");
		addingMoreSongs();
		addSection.hide();
		viewSection.show();
	})

 /// when the delete button is clicked, the row of title, artist, and album is deleted from the view music form ///
	function deleteSong() {
		$(this).parent().remove();
	}
	$(document).on("click", ".delete", deleteSong);

/// using handlebars expressions to insert data into the DOM ///







});

