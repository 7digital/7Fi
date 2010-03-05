require "spec"
require File.dirname(__FILE__) + '/../../../../src/seven_digital/artwork/last.fm/last_fm_search'

describe "Searching Last.fm for photos" do
	@result = nil
	@lastfm = nil

	before(:all) do
		@result = nil
		@lastfm = LastFmSearch.new('ff189f0167fd99d906cab4dfcbf89f48')
	end
	
	it "should return a list of photos as text" do
		when_searching_for('Chubby Jackson')
		@result.should include('<images artist="Chubby Jackson"')
	end

	def when_searching_for(what)
		@result = @lastfm.find(what)
	end

	def then_result_is_ok
		@result.should include('<lfm status="ok">') 
	end
end