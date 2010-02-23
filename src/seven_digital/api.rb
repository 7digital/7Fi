require 'java'
require File.expand_path(File.dirname(__FILE__) + '/../../bin/scala-library.jar')
require File.expand_path(File.dirname(__FILE__) + '/../../bin/coriander-oauth-2.0.2.jar')
require File.expand_path(File.dirname(__FILE__) + '/../../bin/commons-codec-1.4.jar')

require File.expand_path(File.dirname(__FILE__) + '/../preferences')
require File.expand_path(File.dirname(__FILE__) + '/system_credential_finder')
require File.expand_path(File.dirname(__FILE__) + '/search_result')
require File.expand_path(File.dirname(__FILE__) + '/the_internet')

class SevenDigital
	import 'org.coriander.oauth.Consumer'
	import 'org.coriander.oauth.core.Credential'
	import 'java.net.URI'

	def initialize
		@consumer = Consumer.new(SystemCredentialFinder.new.find)
	end

	def search(for_what)
		signed = @consumer.sign(URI.new("http://api.7digital.com/1.2/artist/search?q=#{for_what}&country=GB"))

		puts "Signed as: #{signed}"

		response = TheInternet.new.get(signed)

		SearchResult.new(response)
	end
end