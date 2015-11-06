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