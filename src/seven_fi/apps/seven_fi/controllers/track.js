SevenFi.trackController = SC.ObjectController.create(
/** @scope SevenFi.trackController.prototype */ {
	topTracks : function(artist) {
		var query = SC.Query.local(
			SevenFi.Track,
			"artistId = {artistId}",
			{ artistId : artist.id },
			{ orderBy: 'name'}
		);

		SevenFi.trackStore.find(query);
	},

	_store: function() {
		return SevenFi.trackStore;
	}
});
