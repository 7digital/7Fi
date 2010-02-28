require 'hpricot'
require File.expand_path(File.dirname(__FILE__) + '/../../../src/seven_digital/search/artist')
require File.expand_path(File.dirname(__FILE__) + '/../../../src/seven_digital/search/track')
require File.expand_path(File.dirname(__FILE__) + '/../../../src/seven_digital/search/search_results')

class ArtistSearchResultAdapter
	def to_artists(xml)
		artists = []
		
		Hpricot(xml).search("//response/searchResults/searchResult").each do |artist_node|
			artists << to_artist(artist_node)
		end

		SearchResults.new(artists.size, artists)
	end

	private

	def to_artist(artist_node)
		Artist.new(
			artist_node.at('artist')[:id],
			artist_node.at('artist/name').inner_html,
			artist_node.at('artist/image').inner_html
		)
	end
end