sc_require('controllers/track');

var controller;

module("SevenFi.trackController.Integration.Tests", {
	setup: function() {
		SevenFi.trackController.set('content', SevenFi.trackStore.find(SevenFi.TRACK_SEARCH_QUERY));
		controller = SevenFi.trackController;
	}
});

test("Can find tracks by artist id", function() {
	var anArtist = SevenFi.Artist.create({
		id : 1
	});

	var done = NO;

	controller.get('content').addObserver('length', this, function() {
		var length = controller.getPath('content.length');

		if (done === NO && length > 0) {
		    done = YES;

			ok(
				YES,
				"Found <%@1> top tracks by artist with id <%@2>".fmt(length, anArtist.get('id'))
			);
		
			start();
		}
	});

	controller.topTracks(anArtist);

	stop();
});

test("What happens when the artist id does not exist?", function() {
	ok(YES, "@pending");
});

