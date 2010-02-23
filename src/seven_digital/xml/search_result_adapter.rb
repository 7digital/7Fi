require File.expand_path(File.dirname(__FILE__) + '/../../../bin/jaxen-1.1.1.jar')
require File.expand_path(File.dirname(__FILE__) + '/../../../bin/dom4j-1.6.1.jar')
require File.expand_path(File.dirname(__FILE__) + '/../../../src/seven_digital/search/artist')
require File.expand_path(File.dirname(__FILE__) + '/../../../src/seven_digital/search/search_results')

class SearchResultAdapter
	import 'org.w3c.dom.Document'
	import 'org.jaxen.dom4j.Dom4jXPath'
	import 'org.dom4j.Element'
	import 'org.dom4j.Document'
	import 'org.dom4j.DocumentHelper'

	def to_json(result)
		document = to_document(result)

		query = "//response/searchResults/searchResult"

		xpath = Dom4jXPath.new(query)

		result_nodes = xpath.selectNodes(document)

		artists = []

		result_nodes.each do |node|
			artists << Artist.new(
				node.selectSingleNode('artist').attributeValue('id'),
				node.selectSingleNode('artist/name').getText(),
				node.selectSingleNode('artist/image').getText()
			)
		end

		SearchResults.new(result_nodes.size, artists)
	end

	private

	def to_document(xml)
		DocumentHelper.parseText(xml)
	end
end