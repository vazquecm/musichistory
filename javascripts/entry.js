requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    'q': '../bower_components/q/q'
  },
   shim: {
  	"bootstrap": ["jquery"]
  }
});

require (
  ["script", "bootstrap"],
  function(script, bootstrap) {

});


console.log("Now binding the song array to the handlebar template");
