require 'spec'
require File.dirname(__FILE__) + '/../../../src/seven_digital/api'

describe "Assuming I have valid API key, then api" do
	it "should allow me to connect to 7digital API" do
		seven_digital_api = SevenDigital.new
		search_result = seven_digital_api.search('chubby')

		search_result.should_not be_nil

		puts search_result

		search_result.should include('<response status="ok"')
		search_result.should include("Chubby Jackson")
	end
end