require 'spec'
require File.dirname(__FILE__) + '/../../../src/seven_digital/api'

describe "Assuming I have valid API key, then api" do
	it "should allow me to connect to 7digital API" do
		seven_digital_api = SevenDigital.new
		search_result = seven_digital_api.search('chubby')

		search_result.should_not be_nil

		search_result.should include('<response status="ok"')
		search_result.should include('Chubby')
	end
end

describe "The API" do
	it "Should (for example) allow me to search for artists having two names" do
		seven_digital_api = SevenDigital.new
		search_result = seven_digital_api.search('Neil Young')

		search_result.should_not be_nil
		search_result.should include('<response status="ok"')
		search_result.should include('Paul Young', 'Neil Diamond', 'Neil Young')
	end
end