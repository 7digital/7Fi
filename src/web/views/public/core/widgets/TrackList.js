function TrackList(tracks) {
    this.tracks = tracks;
    
    this.toList = function() {
        var list = Builder.node('ul');

        for (var i = 0; i < tracks.length; i++) {
            list.insert(toListItem(this.tracks[i]));
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