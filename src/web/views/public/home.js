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
		showTopTracksFor(r[i].id);
	}
}

function showTopTracksFor(artistId) {
	new TopTracks().go(artistId, function(result) {
		var targetElement = $("artist_" + artistId);

		var model = new TrackListModel();
		var widget = new TrackList(model, targetElement);

		model.load(result.responseJSON.results.results);
	});
}

function addToPlaylist(id, name) {
    var element = new Element("div", {id : "container" });

    element.innerText = name;
    
    playlist.insert(element);
}

function showStatus(message) {
	status_message.update(message);
}