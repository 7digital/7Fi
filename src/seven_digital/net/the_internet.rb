require 'net/http'

class TheInternet
	import 'java.net.URI'

	def get(uri)
		http = Net::HTTP.new(uri.getHost)
		headers, body = http.get(uri.toString)

		body
	end
end