define(["jquery"], 
  function($) {
    return {
      getAjaxData: function(dataConverter) {

			  $.ajax({
			    url: "data/more-songs.json"
			  }).done(dataConverter);

		},

	
   };
 });
/// this isn't used anymore because we're using firebase to store all song information, thus just calling to it and not to both JSON files ///