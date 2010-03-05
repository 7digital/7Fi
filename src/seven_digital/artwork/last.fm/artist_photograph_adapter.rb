require 'hpricot'
require File.dirname(__FILE__) + '/../../../../src/seven_digital/artwork/artist_photograph'

class ArtistPhotographAdapter
	def to_artists(xml)
		photos = []

		Hpricot(xml).search("//images/image").each do |artist_photo_node|
			photos << to_photo(artist_photo_node)
		end

		photos
	end

	private
	def to_photo(artist_photo_node)
		ArtistPhotograph.new(
			artist_photo_node.at('url').inner_html.to_s.strip,
			to_size(artist_photo_node)
		)
	end

	def to_size(artist_photo_node)
		width = artist_photo_node.at("sizes/size[@name='original']")[:width]
		height = artist_photo_node.at("sizes/size[@name='original']")[:height]
		Size.new(width.to_i, height.to_i)
	end
end