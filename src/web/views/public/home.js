var seven_digital, status_message, playlist;

$(document).ready(function() {
	seven_digital   = $('#seven_digital');
	status_message  = $('#status_message');
	playlist 		= $('#playlist');

	seven_digital.text("And 7digital guff'll go here");
    $('.media').media();
  	$.fn.media.defaults.flvPlayer = 'lib/player.swf';
  	$.fn.media.defaults.mp3Player = 'lib/player.swf';
});

function search() {
	var query = $('#q').val();

	if (null == query || query == '') {
		return;
	}

	showStatus("Searching...");

    new ArtistSearch().go(query, function(result) {
        showStatus('');
        showSearchResults(result.results);
    });
}

function showSearchResults(results) {
	var container = $('<div>', { class : 'search-result-container'});

	seven_digital.find('div.search-result-container').remove();
	seven_digital.append(container);

	for (var i = 0; i <= results.count; i++) {
		var result = results.results[i];
		
		var artistDiv 	= $('<div>', { style : 'vertical-align:top;margin:2px; padding:1px; border:1px solid #F0F0F0;'});

		if (result) {
			var artistName	= $('<div>', { text : result.name, style: 'padding:2px' });

			artistDiv.append(artistName);
		}

		container.append(artistDiv);
	}

	showStatus('');
	
	//var model = new TrackListModel();

	//model.onTrackLoad.subscribe(function(a, b, c) { showStatus(a)}, this);
	
	//model.load(results.results);
}

function showTopTracksFor(artistId) {
	new TopTracks().go(artistId, function(result) {
		var targetElement = $("artist_" + artistId);

		var model = new TrackListModel();
		
		var widget = new TrackList(model, targetElement);

		model.load(result.responseJSON.results.results);
	});
}

function showStatus(message) {
	status_message.text(message);
}