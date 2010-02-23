require 'rubygems'
require 'haml'
require 'sinatra'
require 'jotify'
require File.dirname(__FILE__) + '/../../src/seven_digital/api'
require File.dirname(__FILE__) + '/models/home_model'

class Default
	set :views          => File.dirname(__FILE__) + '/views',
	    :dump_errors    => true,
		:raise_errors   => true,
		:port           => 82

	get '/default.html' do
		api = SevenDigital.new
		
		model = HomeModel.new("Home", api.search('chubby').xml)
		
		haml :home, :locals => { :title => "Home", :model => model }
	end
end