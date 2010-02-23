class HomeModel
	attr_accessor :title
	attr_accessor :results

	def initialize(title, results)
		@title = title
		@results = results
	end
end