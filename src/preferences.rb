class Preferences
	import 'java.io.FileInputStream'
	import 'java.io.IOException'
	import 'java.util.Properties'

	def initialize
		@properties = Properties.new
	end

	def get_string(name)
		@properties.getProperty(name)
	end

	def load(from_xml)
		input = FileInputStream.new(from_xml)

		begin
			@properties.loadFromXML(input);
		ensure
			input.close
		end
	end
end