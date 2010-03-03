var seven_digital, status_message, playlist;

document.observe('dom:loaded', function() {
	seven_digital   = $('seven_digital');
	status_message  = $('status_message');
	playlist = $('playlist');

	seven_digital.update("And 7digital guff'll go here");
});

function search() {
	var query = $('q').value;

	if (null == query || query == '') {
		return;
	}

	showStatus("Searching...");

    new ArtistSearch().go(query, function(result) {
        showStatus('');
        showSearchResults(result);
    });
}

function showSearchResults(results) {
	if ($("container") != null) {
		$("container").remove();
	}
    
	var r = results.responseJSON.results.results;

	$(seven_digital).insert(new Element("div", {id : "container"}));

	for (var i = 0; i <= results.responseJSON.results.count; i++) {
		var artist = Builder.node('h1', r[i].name, [Builder.node("img", { src : r[i].picture_url})]);
		var artist_list = Builder.node('div', {id : "artist_" + r[i].id}, artist);
		$("container").insert(artist_list);
		showTracksFor(r[i].id);
	}
}

function showTracksFor(artistId) {
	new TopTracks().go(artistId, function(result) {
	    $("artist_" + artistId).insert(
		    toTrackList(result.responseJSON.results.results)
		);
	});
}

function toTrackList(tracks) {
    return new TrackList(tracks).toList();
    // TODO: Add click handler like: onclick : "addToPlaylist(" + tracks[i].id +  ",'" + tracks[i].name + "')"
}

function addToPlaylist(id, name) {
    var element = new Element("div", {id : "container" });

    element.innerText = name;
    
    playlist.insert(element);
}

function showStatus(message) {
	status_message.update(message);
}