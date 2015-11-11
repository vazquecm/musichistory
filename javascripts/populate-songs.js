define(["jquery"], 
  function($) {
    return {
    	getAjaxData: function(dataConverter) {
    	
			    $.ajax({
			       url: "https://boiling-fire-9070.firebaseio.com/.json"
			    }).done(function(songList){
			        dataConverter(songList); 
              console.log(songList);		
            });
    	}

    };
 
});

