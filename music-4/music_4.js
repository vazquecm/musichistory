var linkAdd = document.getElementById("link-add");

linkAdd.addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("second-box").removeAttribute("class");
  document.getElementById("third-box").className="hidden";
  // linkAdd.classBoxTwo.add("box-two");
  // linkAdd.classBoxTwo.remove("box-two");
  console.log("linkAdd", linkAdd);
});

var linkList = document.getElementById("link-list");

linkList.addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("third-box").removeAttribute("class");
  document.getElementById("second-box").className="hidden";
  // linkList.classBoxThree.add("visible");
  // linkList.classBoxThree.remove("hidden");
});


// function unhide (event) {
// 	event.preventDefault();
// 	document.getElementsByClassName("music").removeAttribute("class");
// 	console.log("music", music);
// }

// document.getElementByClassName("music").addEventListener("click", unhide)



// document.getElementsByClassName("list").addEventListener("click", hide);

// function hide (event) {
// 	event.preventDefault();
// 	document.getElementsByClassName("list").removeAttribute("class");
// 	console.log("list", list);
// }



 
