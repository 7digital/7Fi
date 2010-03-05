require 'cgi'
require File.dirname(__FILE__) + '/../../../../src/seven_digital/net/the_internet'

class LastFmSearch
	import 'java.net.URI'

	def initialize(api_key)
		@api_key = api_key
	end

	# See: http://www.last.fm/api/show?service=407
	def find(artist_name)
		  the_url =
			"#{API_URL}?method=artist.getimages&artist&api_key=#{@flickr_api_key}&" +
			"artist=#{uri_encode(artist_name)}&"+
			"api_key=#{@api_key}"
		  
		TheInternet.new.get(URI.new(the_url))
	end

	private
	
	API_URL = "http://ws.audioscrobbler.com/2.0/"

	def uri_encode(what)
		CGI::escape(what)
	end
end