require 'haml'
require 'sinatra'
require 'sinatra/base'
require 'activesupport'
require File.dirname(__FILE__) + '/../../../../../src/seven_digital/api'
require File.dirname(__FILE__) + '/../../../../../src/seven_digital/xml/artist_search_result_adapter'

get '/7digital/search/artists' do
	response["Cache-Control"] = "max-age=3600, public"
	response["Expires"] = "3600"
	content_type :json

	if (params[:q].nil?)
		content_type :html
		response["Status"] = "400"
	else
		results = ArtistSearchResultAdapter.new.to_artists(SevenDigital.new.search(params[:q]))

		{
			'status' => 'OK',
			'results' => results
		}.to_json
	end
end