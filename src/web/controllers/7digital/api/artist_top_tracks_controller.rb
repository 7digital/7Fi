require 'haml'
require 'sinatra'
require 'sinatra/base'
require 'activesupport'
require File.dirname(__FILE__) + '/../../../../../src/seven_digital/api'
require File.dirname(__FILE__) + '/../../../../../src/seven_digital/xml/track_search_result_adapter'

get '/7digital/artist/toptracks' do
	response["Cache-Control"] = "max-age=3600, public"
	response["Expires"] = "3600"
	content_type :json

	if (params[:artistid].nil?)
		content_type :html
		response["Status"] = "400"
	else
		results = TrackSearchResultAdapter.new.to_tracks(SevenDigital.new.artist_top_tracks(params[:artistid]))
		{
			'status' => 'OK',
			'results' => (results)
		}.to_json
	end
end