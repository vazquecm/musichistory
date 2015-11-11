/// create arrays of unique artist, song, and album names using lodash ///

define(["lodash"], function (argument) {
	return function,(allSongsArray) {
		//non chained syntax
		var uniqueArtists = _.uniq(allSongsArray, "artist");
		var justTheArtists = _.pluck(uniqueArtists, "artist");

		///chained methods syntax
		var uniqueAlbums = _.chain(allSongsArray)
							.uniq("album.name")
							.pluck("album")
							.value();

		return{
			uniqueArtists: justTheArtists,
			uniqueAlbums: uniqueAlbums
		}
	}
	
})


// define(["lodash"], function (argument) {
// 	return function,(allSongsArray) {
// 		//non chained syntax
// 		var uniqueArtists = _.uniq(allSongsArray, "artist");
// 		var justTheArtists = _.pluck(uniqueArtists, "artist");

// 		///chained methods syntax
// 		var uniqueAlbums = _.chain(allSongsArray)
// 							.uniq("album.name")
// 							.pluck("album")
// 							.value();

// 		return{
// 			uniqueArtists: justTheArtists,
// 			uniqueAlbums: uniqueAlbums
// 		}
// 	}
	
// })