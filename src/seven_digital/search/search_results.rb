class SearchResults
	attr_reader :count, :results
	
	def initialize(count=0, results=nil)
		@count = count
		@results = results
	end
end