require 'java'
require File.expand_path(File.dirname(__FILE__) + '/../../bin/scala-library.jar')
require File.expand_path(File.dirname(__FILE__) + '/../../bin/coriander-oauth-2.0.2.jar')
require File.expand_path(File.dirname(__FILE__) + '/../../bin/commons-codec-1.4.jar')

require File.expand_path(File.dirname(__FILE__) + '/../preferences')
require File.expand_path(File.dirname(__FILE__) + '/net/system_credential_finder')
require File.expand_path(File.dirname(__FILE__) + '/net/the_internet')

class SevenDigital
	import 'org.coriander.oauth.Consumer'
	import 'org.coriander.oauth.core.Credential'
	import 'java.net.URI'

	def initialize(consumer = Consumer.new(SystemCredentialFinder.new.find))
		@consumer = consumer
	end

	def search(for_what)
		signed = @consumer.sign(URI.new("#{API_URL}/artist/search?pageSize=50&q=#{for_what}"))

		TheInternet.new.get(signed)
	end

	def artist_top_tracks(artist_id)
		signed = @consumer.sign(URI.new("#{API_URL}/artist/toptracks?artistid=#{artist_id}"))

		TheInternet.new.get(signed)
	end

	private
	API_URL = 'http://api.7digital.com/1.2'
end