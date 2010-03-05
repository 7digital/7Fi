require 'spec'
require 'jotify'

describe "The Jotify class" do
	before(:all) do
		@jotify = Jotify.new
	end

	after(:all) do
		@jotify.close rescue nil
	end

	it "should allow me to read my playlists from Spotify" do
		pending ('The underlying API is flaky, test is slow and likely we will remove Spotify anyway')

		playlists = @jotify.playlists

		playlists.length.should be > 0
	end

	it "should allow me to search Spotify" do
		search_results = @jotify.search('Chubby')

		search_results.artists.length.should be > 0
	end
end