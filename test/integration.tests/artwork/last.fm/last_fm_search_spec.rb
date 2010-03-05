require "spec"
require File.dirname(__FILE__) + '/../../../../src/seven_digital/artwork/last.fm/last_fm_search'

describe "Searching Last.fm for artist photos" do
	@result = nil
	@lastfm = nil

	before(:all) do
		@result = nil
		@lastfm = LastFmSearch.new('ff189f0167fd99d906cab4dfcbf89f48')
	end
	
	it "should return a list of photos as text" do
		when_searching_for('Chubby Jackson')

		puts @result

		@result.should include('<images artist="Chubby Jackson"')
	end

	it "should return a list of artist images" do
		pending("Not yet implemented, but the searcher should translate the API response to a list of objects") do
			when_searching_for('Chubby Jackson')
			@result.should be_a List
		end
	end

	def when_searching_for(what)
		@result = @lastfm.find(what)
	end

	def then_result_is_ok
		@result.should include('<lfm status="ok">') 
	end
end