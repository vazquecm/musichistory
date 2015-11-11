define(["jquery", "populate-songs", "hbs", "add-song"], 
  function($, populateSongs, hbs, addSong) { 

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

		require(["hbs!../templates/songs"], function(songTemplate){
			$("#right-side").append(songTemplate(rawJSONData));
			});
	}

/// this is the callback function for ajax and also gets the data from the handlebars template  ///		
	populateSongs.getAjaxData(dataConverter);
	
/// the button at the end of the View Music form that adds more songs and also hides the add music form ///
	// $("#adding").click(function(){
	// 	var addedArtist = $("#artist").val();
	// 	var addedSong = $("#song").val();
	// 	var addedAlbum = $("#album").val();
	// 	console.log("user info", addedArtist, addedSong, addedAlbum);
	// });
 // /// when the delete button is clicked, the row of title, artist, and album is deleted from the view music form ///
	function deleteSong() {
		$(this).parent().remove();
	}
	$(document).on("click", ".delete", deleteSong);
		console.log("do i work?");	

});
