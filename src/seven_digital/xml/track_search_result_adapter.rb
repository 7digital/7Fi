require 'nokogiri'
require File.expand_path(File.dirname(__FILE__) + '/../../../src/seven_digital/search/artist')
require File.expand_path(File.dirname(__FILE__) + '/../../../src/seven_digital/search/track')
require File.expand_path(File.dirname(__FILE__) + '/../../../src/seven_digital/search/search_results')

class TrackSearchResultAdapter
	def to_tracks(xml)
		tracks = []

		Nokogiri::XML(xml).css("response tracks track").each do |track_node|
			tracks << to_track(track_node)
		end

		SearchResults.new(tracks.size, tracks)
	end

	private

	def to_track(track_node)
		Track.new(
			track_node.get_attribute('id'),
			track_node.at('title').inner_html,
			'http://www.url.com'
		)
	end
end