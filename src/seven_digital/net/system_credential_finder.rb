class SystemCredentialFinder
	import 'java.lang.System'
	import 'org.coriander.oauth.core.Credential'

	def initialize
		
	end

	def find
		prefs = Preferences.new
		prefs.load("#{user_home}/.jotify-settings.xml")

		Credential.new(
			prefs.get_string('7digital.api.key'),
			prefs.get_string('7digital.api.secret')
		)
	end

	private
	def user_home
		System::getProperty('user.home')
	end
end