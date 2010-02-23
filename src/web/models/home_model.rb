class HomeModel
	attr_accessor :title, :spotify_username

	def initialize(title, spotify_username)
		@title = title
		@spotify_username = spotify_username
	end
end