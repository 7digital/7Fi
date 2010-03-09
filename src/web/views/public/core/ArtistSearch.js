function ArtistSearch() {
    this.go = function(query, onSuccess) {
        var url = formatUrl(query);
        
        $.getJSON(url, onSuccess);  
    }

    function formatUrl(query) {
        return "7digital/search/artists?q=" + query;
    }
}