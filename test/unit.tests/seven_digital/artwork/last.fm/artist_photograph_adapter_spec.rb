require "spec"

require '../../../../../src/seven_digital/artwork/last.fm/artist_photograph_adapter'

describe "Adapting valid search xml" do
	@xml 	= nil
	@results = nil

	before(:all) do
		@xml = nil
		@results = nil
	end

	it "should produce a result with url and size" do
		given_some_valid_xml

		when_it_is_adapted

		@results.length.should be 2

		@results[0].size.should be_a Size

		@results[0].size.width.should be_an Integer
		@results[0].size.width.should be 167

		@results[0].size.height.should be_an Integer
		@results[0].size.height.should be 244

		@results[0].url.should be_a String
		@results[0].url.should == "http://www.last.fm/music/Chubby+Jackson/+images/4149031"
	end

	def given_some_valid_xml
		@xml = File.read(File.dirname(__FILE__) + '/../../../../res/last-fm-artist-search-response.xml')	
	end

	def when_it_is_adapted
		raise StandardError.new('No xml has been specified') if @xml.nil?
		@results = ArtistPhotographAdapter.new.to_artists(@xml)
	end
end