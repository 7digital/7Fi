require "spec"
require File.dirname(__FILE__) + '/../../../src/seven_digital/artwork/flickr_search'

describe "Searching Flickr for CC photos" do
	@result = nil
	@flickr = nil
	
	before(:all) do
		@result = nil
		@flickr = FlickrSearch.new('7e7e701c445e9f528c8c656fb9ad60c7')
	end

	it "should return a set of public domain photographs as text" do
		when_searching_for 'number 10'

		then_result_is_ok
	end

	def when_searching_for(what)
		@result = @flickr.find(what)
	end
	
	def then_result_is_ok
		 @result.should include('<rsp stat="ok">')
	end
end