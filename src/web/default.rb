require 'rubygems'
require 'haml'
require 'sinatra'
require 'activesupport'
require 'sinatra/base'
require 'jotify'
require 'json'
require File.dirname(__FILE__) + '/../../src/seven_digital/api'
require File.dirname(__FILE__) + '/../../src/seven_digital/xml/search_result_adapter'
require File.dirname(__FILE__) + '/models/home_model'

# TODO: Consider this example: http://github.com/ben-biddington/spotify-api/blob/master/lib/jotify/api.rb
class Default
	set :views          => File.dirname(__FILE__) + '/views',
	    :dump_errors    => true,
		:raise_errors   => true,
		:port           => 82

	get '/default.html' do
		model = HomeModel.new("7Fi -- Home", 'ben.biddington')

		haml :home, :locals => { :model => model }
	end

	get '/playlists.json' do
		response["Cache-Control"] = "max-age=3600, public"
		response["Expires"] = "3600"

		jotify = Jotify.new

		begin
			content_type :json
			{
				'status' => 'OK',
				'result' => {
					'playlists' =>
					jotify.playlists.map do |p|
						p.to_h
					end.each { |h| h['size'] = h.delete(:tracks).size }
				}
			}.to_json
		ensure
			jotify.close unless jotify.nil?	
		end
	end

	get '/7digital/search/artists' do
		response["Cache-Control"] = "max-age=3600, public"
		response["Expires"] = "3600"
		content_type :json

		if (params[:q].nil?)
			content_type :html
			response["Status"] = "400"
		else
			results = SearchResultAdapter.new.to_json(SevenDigital.new.search(params[:q]))

			{
				'status' => 'OK',
				'results' => (results).to_json
			}.to_json
		end
	end
end