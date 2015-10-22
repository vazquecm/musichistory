var songs = [];

// / songs[songs.length] = "So Groovy by Jocelyn Alice on the album So Groovy";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// songs[songs.length] = "Better People by Indie Arie on the album Testimony";

console.log(songs)

var songElement = document.getElementById("third-box");
 
songs.unshift("So Groovy > by Jocelyn Alice on the album So Groovy");
//unshift adds to the beginning of an array
songs.push("Better People > by Indie Arie on the album Testimony");
//push adds to the end of an array
console.log(songs);

var string = "";

for (i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(">", "-");
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace("@", "");
	songs[i] = songs[i].replace("(", "");
    songs[i] = songs[i].replace("!", "");
    string += "<div class='song-title'>" + songs[i] + "</div>";
    // 1.
    // string += "<div class='song-title'>" + songs[i] + "</div>"
}
console.log(songs);
console.log(string);

songElement.innerHTML = string

// 2.
// songElement.innerHTML = string 


// "<div class="song-title">So Groovy by Jocelyn Alice on the album So Groovy</div>"

// songElement = document.getElementById("second-box");

// var Artist = "";

 // <li>Artist:</li>
 //     <label for="feedback-type"></label>
 //    <select id="feedback-type" name="type">
 //      <option>Jocelyn Alice</option>
 //      <option>Sister Sledge</option>
 //      <option>Joe Turner</option>
 //      <option>Indie Arie</option>
 //      <option>Eydie Gorme</option>
 //    </select>

 //      <li>Album:</li>
 //      <label for="feedback-type"></label>
 //    <select id="feedback-type" name="type">s
 //      <option>So Groovy</option>
 //      <option>We Are Family</option>
 //      <option>Shake Rattle & Roll</option>
 //      <option>Testimony</option>
 //      <option>Bossa Nova</option>
 //    </select>


// for (i = 0; i < Artist; i++) {
// 	Artist[i] = Artist.replace("Sister Sledge", ZZ Top);
// 	Artist[i] = Artist.replace("Joe Turner", Supertramp);
// 	Artist[i] = Artist.replace("Indie Arie", Pink Floyd);
// 	Artist[i] = Artist.replace("Edyie Gormet", Guns & Roses);

