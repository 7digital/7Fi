require 'rubygems'
require 'haml'
require 'sinatra'
require 'sinatra/base'
require 'activesupport'

get '/7digital/search/artists' do
	response["Cache-Control"] = "max-age=3600, public"
	response["Expires"] = "3600"
	content_type :json

	if (params[:q].nil?)
		content_type :html
		response["Status"] = "400"
	else
		results = SearchResultAdapter.new.to_artists(SevenDigital.new.search(params[:q]))

		{
			'status' => 'OK',
			'results' => (results)
		}.to_json
	end
end