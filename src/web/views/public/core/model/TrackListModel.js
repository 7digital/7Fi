function TrackListModel() {
	this.tracks = null;
	this.onTrackLoad = new YAHOO.util.CustomEvent("ontrackload", this);

	this.load = function(tracks) {
		console.debug("Loading " + tracks.length + " tracks");
		
		this.tracks = tracks;
		
		this.onTrackLoad.fire(this);
	}

	this.getTracks = function() {
		return this.tracks;
	}
}