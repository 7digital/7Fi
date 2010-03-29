SevenFi.trackController = SC.ObjectController.create(
/** @scope SevenFi.trackController.prototype */ {
	topTracks : function() {
		return SevenFi.Track.create();	
	}
});
