function TopTracks() {
    this.contentType = 'application/json';

    this.go = function(artistId, onSuccess) {
    	var url = formatUrl(artistId);

		$.getJSON(url, onSuccess);
    }

    function formatUrl(artistId) {
        return "7digital/artist/toptracks?artistid=" + artistId;
    }
}