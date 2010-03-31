// Run this fixture by browsing to:
// http://localhost:4020/seven_fi/en/current/tests/examples/how.to/use-array-controller.html

sc_require('models/task');

var store, controller;

module("SevenFi.ArrayController.Examples", {
	setup : function() {
		controller = store = null;
	}
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

	controller.addRangeObserver(
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

test("Use a fixed size array as data source", function() {
	controller = SC.ArrayController.create({
		add : function(what) {
			this.get('content').popObject();
			this.get('content').pushObject(what);
		}
	});

	controller.set('content', store = []);

	controller.add("xxx");
	controller.add("yyy");
	controller.add("zzz");

	equals(
		controller.get('length'), 1,
		"Array has been kept at length 1 and the current entry is <%@1>".
			fmt(controller.get('content')[0])
	);
});

test("The 'arrangedObjects' is the controller itself", function(){
	given_a_controller_with_an_array_as_its_content();

	ok(controller.get('arrangedObjects') === controller, "The 'arrangedObjects' object IS the controller");
});

test("The 'content' property behaves exactly as expected", function() {
	var array_0 = ["a", "b", "c"];
	var array_1 = ["d", "e"];

	given_a_controller();

	when_its_content_is_set_to(array_0);
	then_its_content_is(array_0);
	then_it_has_length(3);

	when_its_content_is_set_to(array_1);
	then_its_content_is(array_1);
	then_it_has_length(2);
});

test("What about when 'content' property is bound to a store?", function () {
	given_a_controller();

	given_a_store();

	console.debug(store.get('length'));

	controller.set('content', store.find(SevenFi.Task));

	then_it_has_length(3);
});

var given_a_controller_with_an_array_as_its_content = function() {
	given_a_controller();
	controller.set('content', store = []);
};

var given_a_controller = function() {
	controller = SC.ArrayController.create({
		add : function(what) {
			this.addObject(what);
		}
	});
};

var given_a_store = function() {
//	store = SC.Store.create({
//		commitRecordsAutomatically: NO
//	});

	store = SC.Store.create().from(SevenFi.Task.FIXTURES);
};


var when_its_content_is_set_to = function(what) {
	controller.set('content', what);	
};

var then_it_has_length = function(what) {
	ok(
		controller.get('length') === what,
		"Controller has expected number of items <%@1>".fmt(what)
	);
};

var then_its_content_is = function(what) {
	ok(
		controller.get('content') === what,
		"Controller has expected content property <%@1>".fmt(what.toString())
	);
};