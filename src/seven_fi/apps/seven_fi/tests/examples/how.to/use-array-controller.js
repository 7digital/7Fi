// Run this fixture by browsing to:
// http://localhost:4020/seven_fi/en/current/tests/examples/how.to/use-array-controller.html

sc_require('models/task');

var store, controller;

module("SevenFi.ArrayController.Examples", {
	setup : function() { }
});

// @see: http://docs.sproutcore.com/symbols/src/_Users_charles_Sites_sproutcore_samples_frameworks_sproutcore_frameworks_foundation_controllers_array.js.html
test("Can add items to its content provided it extends SC.Array", function() {
	given_a_controller_with_an_array_as_its_content();
	
	controller.add('Any string for example');

	equals(controller.get('length', store), 1, "The item was added as expected.")
});

test("Should be able to observe a controller's arangedObjects", function() {
	ok(YES, '@pending, perhaps this is actually not true.');
});

test("Should be able to observe a controller's content via a RangeObserver", function() {
	given_a_controller_with_an_array_as_its_content();

	var msg;

	var observer = controller.addRangeObserver(
		SC.IndexSet.create(0,10),
		this,
		function(array, objects, key, indexSet, context) {
			msg = "Notified about changes to indexes [%@1] with key <%@2>".fmt(
				indexSet.get('length'),
				key
			);

			start();
		}
	);

	controller.add('Any string for example');
	controller.add('And another message');
	controller.add('And yet another message');

	stop();

	ok(YES, msg + " (controller represents <%@1> items)".fmt(controller.get('length')));
});

test("This is pending", function() {
	expect(0);	
});

var given_a_controller_with_an_array_as_its_content = function() {
	controller = SC.ArrayController.create({
		add : function(what) {
			this.addObject(what);
		}
	});

	controller.set('content', store = []);
};
