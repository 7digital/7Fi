function TrackList(trackListModel, elem) {
    this.trackListModel = trackListModel;
    this.elem			= elem;

	this.trackListModel.onTrackLoad.subscribe(onModelLoad, this);

	function onModelLoad(type, args, me) {
		var list = toList();
		elem.insert(list);
	}

    function toList () {
        var list = Builder.node('ul');

		var tracks = trackListModel.getTracks();

        for (var i = 0; i < tracks.length; i++) {
            list.insert(toListItem(tracks[i]));
        }

	    return list;
    }

    function toListItem(track) {
        return Builder.node('li', [toLink(track)]);
    }

    function toLink(track) {
        return Builder.node('a', { href : "#" }, track.name);
    }
}