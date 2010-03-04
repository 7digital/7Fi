require 'flickr'
require 'cgi'

require File.dirname(__FILE__) + '/../../../src/seven_digital/net/the_internet'

class FlickrSearch
	import 'java.net.URI'
	
	def initialize(flickr_api_key)
		@flickr_api_key = flickr_api_key
	end

	# See: http://www.flickr.com/services/api/explore/
	# See: http://www.flickr.com/services/api/flickr.photos.search.html
	def find(what)
		the_url =
			"#{API_URL}?method=flickr.photos.getRecent&api_key=#{@flickr_api_key}&" +
			"text=#{uri_encode(what)}&"+
			"license=#{CREATIVE_COMMONS}" +
			"media=photos" 

		TheInternet.new.get(URI.new(the_url))
	end

	private
	
	API_URL 			= "http://api.flickr.com/services/rest"
	CREATIVE_COMMONS 	= 'cc'
	
	def uri_encode(what)
		CGI::escape(what)
	end
end