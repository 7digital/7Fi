function TopTracks() {
    this.contentType = 'application/json';

    this.go = function(artistId, onSuccess) {
        var url = formatUrl(artistId);
        
        new Ajax.Request(url, {
		    method      : 'get',
		    contentType : this.contentType,
		    onSuccess   : onSuccess,
		    onFailure   : function(result) {}
	    });
    }

    function formatUrl(artistId) {
        return "7digital/artist/toptracks?artistid=" + artistId;
    }
}