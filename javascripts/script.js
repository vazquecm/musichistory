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

});