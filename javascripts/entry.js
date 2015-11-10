requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs"
  },
   shim: {
  	"bootstrap": ["jquery"]
  }
});

require (
  ["script", "bootstrap"],
  function(script, bootstrap){

  }

);

console.log("Now binding the song array to the handlebar template");









//   function($, script, populateSongs, getMoreSongs) {
//   	populateSongs.getAjaxData(function (data) {
//   		console.log("working");
//   		require(['hbs!../templates/songs'], function(songTemplate) {
// 			$("songList").html(songTemplate(data));
// 		});
//   	});
//   // 	getMoreSongs.getAjaxData(function (data) {
//   // 		console.log("working too")
//   // 		require(['hbs!../templates/songs'], function(songTemplate) {
// 		// 	$("songList").html(songTemplate(data));
// 		// });
//   // 	})

// });
///  you need the call back function working to insert here ///


