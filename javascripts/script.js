define(["jquery", "populate-songs", "hbs!../templates/songs", "add-song", "lodash"], 
  function($, populateSongs, songs, addSong, lodash) { 

/// variables used in the functions below ///
	var addButton = $("#add-music");
	var viewButton = $("#view-music");
	var addSection = $("#left-side");
	var viewSection = $("#right-side");
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
/// this function is waiting to be activated; receives data from the songs.json file and puts them into the DOM ///
	function dataConverter(rawJSONData) {

/// this function gathers the data from handlebars and then adds it to the DOM & to the Firebase API ///
		require(["hbs!../templates/songs"], function(songTemplate) {
			$("#right-side").append(songTemplate(rawJSONData));
			});

/// this function gathers all album names and put them into the option box for user selection //
		require(["hbs!../templates/artist"], function(songTemplate) {
			$("#selectArtist").append(songTemplate(rawJSONData));
			console.log("select artist", rawJSONData);
		});

/// this function gathers all artist names and puts them into the option box for the user to select ///
		require(["hbs!../templates/album"], function(songTemplate) {
			$("#selectAlbum").append(songTemplate(rawJSONData));
			console.log("select album", rawJSONData);
		});

/// this function gathers all title names and puts them into the option box for the user to select ///
		require(["hbs!../templates/title"], function(songTemplate) {
			$("#selectTitle").append(songTemplate(rawJSONData));
			console.log("select title", rawJSONData);
		});

}
/// this is the action that activates the callback function for ajax and also gets the data from the handlebars template; the function is declared up above and is just waiting to be executed.  ///		
	// populateSongs.getAjaxData(dataConverter);

/// when the artist button is clicked the users selected choice populates in the DOM, no others are seen ///
	$("#selectArtist").change(function() {
		var chosenArtist = $("#selectArtist option:selected" ).val();
		var oldList = populateSongs.getNewSong();
		console.log("chosenArtist", chosenArtist);
	});
// when the album button is clicked the users selected choice populates in the DOM, no others are seen ///
	$("#selectAlbum").change(function() {
		var chosenAlbum = $("#selectAlbum option:selected" ).val();
		var oldList = populateSongs.getNewSong();
		console.log("chosenAlbum", chosenAlbum);
	});
// when the title button is clicked the users selected choice populates in the DOM, no others are seen ///
	$("#selectTitle").change(function() {
		var chosenTitle = $("#selectTitle option:selected" ).val();
		var oldList = populateSongs.getNewSong();
		console.log("chosenTitle", chosenTitle);
	});
  
});