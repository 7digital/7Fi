require 'hpricot'
require File.expand_path(File.dirname(__FILE__) + '/../../../src/seven_digital/search/artist')
require File.expand_path(File.dirname(__FILE__) + '/../../../src/seven_digital/search/track')
require File.expand_path(File.dirname(__FILE__) + '/../../../src/seven_digital/search/search_results')

class TrackSearchResultAdapter
	def to_tracks(xml)
		tracks = []

		Hpricot(xml).search("//response/tracks/track").each do |track_node|
			tracks << to_track(track_node)
		end

		SearchResults.new(tracks.size, tracks)
	end

	private

	def to_track(track_node)
		Track.new(
			track_node[:id],
			track_node.at('title').inner_html,
			''
		)
	end
end