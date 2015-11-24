requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    'q': '../lib/bower_components/q/q',
    "firebase": "../lib/bower_components/firebase/firebase"
  },
   shim: {
  	"bootstrap": ["jquery"],
    "firebase": {
      exports: "Firebase"
  }    
}
});

require (
  ["script", "bootstrap", "x"],
  function(script, bootstrap, x) {

});

console.log("Now binding the song array to the handlebar template");