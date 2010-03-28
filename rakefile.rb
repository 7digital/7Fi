desc 'Start web API'
task :api do |t|
	bootstrap = "#{File.dirname(__FILE__)}/src/web/default.rb"

	#bootstrap.replace(bootstrap.gsub(/\//, '\\')) if is_windows?	

	system("cmd", "/c", "jruby", "-S", "#{bootstrap}", "/K")
end

desc 'Start sproutcore'
task :sproutcore do |t|
	bootstrap = "#{File.dirname(__FILE__)}/src/seven_fi"

	bootstrap.replace(bootstrap.gsub(/\//, '\\')) if is_windows?

	sh("cd #{bootstrap} && sc-server")
end

private
def is_windows?
  processor, platform, *rest = RUBY_PLATFORM.split("-")
  platform == 'mswin32'
end