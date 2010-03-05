class ArtistPhotograph
	attr_reader :url, :size
	
	def initialize(url, size)
		@url = url
		@size = size
	end
end

class Size
	attr_reader :width, :height
	
	def initialize(width=0, height=0)
		@width = width
		@height = height
	end
end