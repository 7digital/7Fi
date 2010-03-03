function ArtistSearch() {
    this.contentType = 'application/json';

    this.go = function(query, onSuccess) {
        var url = formatUrl(query);
        
        new Ajax.Request(url, {
		    method      : 'get',
		    contentType : this.contentType,
		    onSuccess   : onSuccess,
		    onFailure   : function(result) {}
	    });  
    }

    function formatUrl(query) {
        return "7digital/search/artists?q=" + query;
    }
}