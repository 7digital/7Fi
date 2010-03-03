require File.dirname(__FILE__) + '/../../../../src/seven_digital/xml/artist_search_result_adapter'

describe "Adapting artist search result XML" do
	xml = nil
	
	before(:all) do
		xml = File.read(File.dirname(__FILE__) + '/../../../res/artist-search.xml')
	end
	
	it "should provide the number of results" do
		adapter = ArtistSearchResultAdapter.new

		result = adapter.to_artists(xml)

		result.count.should equal(10)
	end

	it "should return Chubby Checker with correct image and id" do
		adapter = ArtistSearchResultAdapter.new

		result = adapter.to_artists(xml)

		result.results[1].id.should match('41217')
		result.results[1].name.should match("Chubby Checker")
		result.results[1].picture_url.should match("http://cdn.7static.com/static/img/artistimages/00/000/412/0000041217_150.jpg")
	end
end