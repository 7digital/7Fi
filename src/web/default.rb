require 'rubygems'
require 'haml'
require 'sinatra'
require File.dirname(__FILE__) + '/models/home_model'

class Default
	set :views          => File.dirname(__FILE__) + '/views',
	    :dump_errors    => true,
		:raise_errors   => true,
		:port           => 82

	get '/default.html' do
		haml :home, :locals => { :title => "xxx" }
	end
end