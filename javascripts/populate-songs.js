define(["jquery"], 
  function($) {
    return {
    	getAjaxData: function(dataConverter) {
    	
			    $.ajax({
			       url: "data/songs.json"
			    }).done(function(songList){
			        dataConverter(songList); 
              console.log(songList);		
            });
    	}

    }; 
});