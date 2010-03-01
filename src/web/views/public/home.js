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

	var url = "7digital/search/artists?q=" + query;

	var req = new Ajax.Request(url, {
		method      : 'get',
		contentType : 'application/json',
		onSuccess   : function(result) {
			showStatus('');
			showSearchResults(result);
		},
		onFailure   : function(result) {
			showStatus('Error: ' + result.status);
		}
	});
}

function showStatus(message) {
	status_message.update(message);
}

function showSearchResults(results) {
	var temp = '';

	if ($("container") != null) {
		$("container").remove();
	}
    
	var r = results.responseJSON.results.results;

	$(seven_digital).insert(new Element("div", {id : "container"}));

	for (var i=0; i<=results.responseJSON.results.count; i++) {
		var artist = Builder.node('h1', r[i].name, [Builder.node("img", { src : r[i].picture_url})]);
		var artist_list = Builder.node('div', {id : "artist_" + r[i].id}, artist);
		$("container").insert(artist_list);
		get_tracks_for(r[i].id);
	}

	return;
}

function get_tracks_for(artist_id) {
	var url = "7digital/artist/toptracks?artistid=" + artist_id;

	var req = new Ajax.Request(url, {
		method      : 'get',
		contentType : 'application/json',
		onSuccess   : function(result) {
			$("artist_" + artist_id).insert(
				track_to_list(result.responseJSON.results.results)
			);
		},
		onFailure   : function(result) {
			showStatus('Error: ' + result.status);
		}
	});
}

function track_to_list(tracks) {
	var list = Builder.node('ul');
	for (var i = 0; i < tracks.length; i++) {
		list.insert(Builder.node(
			'li',
			[Builder.node('a',
                {
                    href : "#",
                    onclick : "add_to_playlist(" + tracks[i].id +  ",'" + tracks[i].name + "')"
                },
                    tracks[i].name)])
		);
	}
	return list;
}

function add_to_playlist(id, name)
{
    var element = new Element("div", {id : "container" })

    element.innerText = name;
    
    playlist.insert(element);
    return false;
}