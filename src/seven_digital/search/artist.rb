class Artist
	attr_reader :id, :name, :picture_url
	
	def initialize(id = 0, name = nil, picture_url = nil)
		@id = id
		@name = name
		@picture_url = picture_url
	end
end