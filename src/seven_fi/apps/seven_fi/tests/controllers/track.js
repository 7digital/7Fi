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
		id : 1,
		name : "Amy Winehouse (I think)"
	});

	controller.topTracks(anArtist);

	whenLoaded(function() {
		ok(
			YES,
			"Loaded <%@1> items for artist <%@2>".fmt(
				controller.getPath('content.length'),
				anArtist.get('id')
			)
		);
	});

	stop();
});

test("What happens when the artist id does not exist?", function() {
	ok(YES, "@pending");
});

test("Throws an error unless there is an id property on the argument", function() {
	ok(YES, "@pending");
});

var whenLoaded = function(thenWhat) {
	var done = NO;
	
	controller.get('content').addObserver('length', this, function() {
		var length = controller.getPath('content.length');

		if (done === NO && length > 0) {
		    done = YES;

			thenWhat();
			
			start();
		}
	});

	stop();
};

