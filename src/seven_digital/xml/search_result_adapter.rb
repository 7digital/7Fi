require File.expand_path(File.dirname(__FILE__) + '/../../../bin/jaxen-1.1.1.jar')
require File.expand_path(File.dirname(__FILE__) + '/../../../bin/dom4j-1.6.1.jar')
require File.expand_path(File.dirname(__FILE__) + '/../../../src/seven_digital/search/artist')
require File.expand_path(File.dirname(__FILE__) + '/../../../src/seven_digital/search/search_results')

require 'hpricot'

class SearchResultAdapter
	def to_artists(xml)
		artists = []

		Hpricot(xml).search("//response/searchResults/searchResult").each do |artist_node|
			#artists << to_artist(artist_node)
		end

		SearchResults.new(artists.size, artists)
	end

	private

	def to_artist(artist_node)
		Artist.new(
			artist_node.at('artist').get_attribute('id'),
			artist_node.at('artist/name').inner_html,
			artist_node.at('artist/image').inner_html
		)
	end
end