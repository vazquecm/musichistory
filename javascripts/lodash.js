define(["lodash"], function(_) {

    return function(allSongsArray) {
        //non-chained syntax
        var uniqueArtists = _.uniq(allSongsArray, "artist");
        var justTheArtists = _.pluck(uniqueArtists, "artist");

        //Chained methods syntax
        var uniqueAlbums; _.chain(allSongsArray)
                           .uniq('album.name')
                           .pluck('album')
                           .value();

    return{
        uniqueArtists: justTheArtists,
        uniqueAlbums: uniqueAlbums
    };
 };
});

define(["lodash"], function(_) {
        return function(allSongsArray) {
            var uniqueArtists = _.chain(allSongsArray)
                                 .uniq("artist")
                                 .pluck("artist")
                                 .value();

            var uniqueAlbums = _.chain(allSongsArray)
                                .uniq('album.name')
                                .pluck('album')
                                .value();
        return {
            uniqueArtists: uniqueArtists,
            uniqueAlbums: uniqueAlbums
        };                 
    };
        // var matchingAlbums = _.chain(config.originalSongsArray)
        //              .filter((song) => song.artist === selectedArtist)
        //              .uniq('album.name')
        //              .pluck('album')
        //              .value();
});

