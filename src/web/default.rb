require 'rubygems'
require 'haml'
require 'sinatra'
require 'sinatra/base'
require 'activesupport'
require 'jotify'
require 'json'
require File.dirname(__FILE__) + '/../../src/seven_digital/api'
require File.dirname(__FILE__) + '/../../src/seven_digital/xml/search_result_adapter'
require File.dirname(__FILE__) + '/models/home_model'
require File.dirname(__FILE__) + '/controllers/7digital/api/artist_search_controller'

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

	load File.dirname(__FILE__) + '/controllers/7digital/api/artist_search_controller.rb'
	load File.dirname(__FILE__) + '/controllers/7digital/api/artist_top_tracks_controller.rb'
end