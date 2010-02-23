require 'spec'
require File.dirname(__FILE__) + '/../../../src/seven_digital/api'

describe "Assuming I have jotify settings then find" do
	it "should find my settings from my jotify settings file" do
	    finder = SystemCredentialFinder.new
		result = finder.find

		result.should_not be_nil
	end
end