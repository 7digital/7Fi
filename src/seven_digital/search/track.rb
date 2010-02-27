class Track
	attr_reader :id, :name, :stream_url
	
	def initialize(id = 0, name = nil, stream_url = nil)
		@id = id
		@name = name
		@stream_url = stream_url
	end
end