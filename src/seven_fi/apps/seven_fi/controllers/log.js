SevenFi.logController = SC.ArrayController.create(
/** @scope SevenFi.logController.prototype */ {
	log : function(what) {
		SevenFi.log.createRecord(SevenFi.LogEntry, {
			guid 		: this._nextId(),
			message 	: what,
			timestamp 	: SC.DateTime.create()
		});

		SevenFi.log.flush();

		console.log(what);
	},

	summary : function() {
		var length = this.get('length');

		return length > 0
			? this.get('content').objectAt(length - 1).get('message')
			: "";	
	}.property('length').cacheable(),

	_nextId : function() {
		return (this._id++).toString();	
	},

	_id : 0
});
