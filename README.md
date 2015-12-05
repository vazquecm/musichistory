# angular musichistory  

This file now will be all angularjs.  

Changed over the ajax call into an angularjs callback using $http.  

The index.html is now just bare bones and am using partials (templates) to inject data into the index. There are 3 html templates being used.  
  
Firebase is called to upload the songs data to the html partials, the add music and list music views both work.  

Don't forget to open the angularjs extention in chrome to see all the console logs and it also shows the structure of the firebase database structure.    

The ability to add a song is functioning, it adds it to the DOM and also the firebase database.  

When using html, javascript and firebase - it creates 3 way binding, all 3 communicate with the others and allow the user to put data one place and then it shows up in the other two....keep studying, you'll get it...sooner or later.  

A little css styling was done...nothing too creative but at least it has something.  

The delete functionality is working, it deletes in the DOM as well as in firebase database.    
  