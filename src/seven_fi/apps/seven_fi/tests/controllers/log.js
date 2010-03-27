sc_require('controllers/log');

var controller 	= null;
var store 		= null;

module("SevenFi.logController", {
	setup : function() {
		store = [];

		controller = SC.ArrayController.create({
			canAddContent : YES,
			_count : 0,
			log : function(what) {
				console.log(what);

				var id = (this._count++).toString();

				this.addObject(
					SevenFi.LogEntry.create({
						guid 		: id,
						message 	: what,
						timestamp 	: SC.DateTime.create()
					})
				);
			}
		});
	}
});

/*
@ see: http://wiki.sproutcore.com/Todos+04-Hook+Up+Your+Data

IMPORTANT: SC.ArrayController and the related SC.ObjectController behave as a
proxies for the object you set as their "content" property.
This means that when you work with controllers, instead of accessing properties on
the controller content you will access the controller itself.

For example, you can normally bind views in your UI directly to the
ArrayController and they will work as if you bound directly to the content array.
Later, you can change the content of the controller to point to another array and
UI will update appropriately without needing you to reconfigure each UI item individually.

 */

test("How to observing the number of results through controller's length property", function() {
	controller.set('content', store);

	var msg;
	var okay = NO;

	controller.addObserver('length', this, function() {
		msg = "Observer notified of length, and it has changed to <%@1>".
			fmt(controller.get('length'));

		okay = YES;
	});

	controller.log("An example log message");

	while (okay === NO) {}
	
	ok(YES, msg);
});


