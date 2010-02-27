require File.expand_path(File.dirname(__FILE__) + '/../../../src/seven_digital/search/artist')
require File.expand_path(File.dirname(__FILE__) + '/../../../src/seven_digital/search/track')
require File.expand_path(File.dirname(__FILE__) + '/../../../src/seven_digital/search/search_results')

require 'hpricot'

class SearchResultAdapter
	def to_artists(xml)
		artists = []

		Hpricot(xml).search("//response/searchResults/searchResult").each do |artist_node|
			artists << to_artist(artist_node)
		end

		SearchResults.new(artists.size, artists)
	end

	def to_tracks(xml)
		tracks = []

		Hpricot(xml).search("//response/tracks/track").each do |track_node|
			tracks << to_track(track_node)
		end

		SearchResults.new(tracks.size, tracks)
	end

	private

	def to_artist(artist_node)
		Artist.new(
			artist_node.at('artist').get_attribute('id'),
			artist_node.at('artist/name').inner_html,
			artist_node.at('artist/image').inner_html
		)
	end

	def to_track(track_node)
		Track.new(
			track_node.get_attribute('id'),
			track_node.at('title').inner_html,
			'http://www.url.com'
		)
	end
end