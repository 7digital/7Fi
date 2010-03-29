sc_require('controllers/track');

var controller;

module("SevenFi.track", {
	setup: function() {
		
	}
});

test("Can find tracks by artist id", function() {
	var anArtist = SevenFi.Artist.create({
		id : 1
	});

	var result = SevenFi.trackController.topTracks(anArtist);

	ok(result != null);
});

