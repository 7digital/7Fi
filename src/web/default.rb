require 'rubygems'
require 'haml'
require 'sinatra'
require 'jotify'
require 'json'
require File.dirname(__FILE__) + '/../../src/seven_digital/api'
require File.dirname(__FILE__) + '/models/home_model'

class Default
	set :views          => File.dirname(__FILE__) + '/views',
	    :dump_errors    => true,
		:raise_errors   => true,
		:port           => 82

	#set :public, "/web/public"
	
	get '/default.html' do
		model = HomeModel.new("Home")

		haml :home, :locals => { :model => model }
	end

	get '/playlists.json' do
		response["Cache-Control"] = "max-age=3600, public"
		
		content_type :json
		{
			'status' => 'OK',
			'result' => {
				'playlists' =>
				Jotify.new.playlists.map do |p|
					p.to_h
			    end.each { |h| h['size'] = h.delete(:tracks).size }
			}
		}.to_json
	end
end