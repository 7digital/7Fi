SevenFi.LogEntry = SC.Record.extend(
/** @scope SevenFi.Task.prototype */ {
	primaryKey 	: "guid",
    guid		: SC.Record.attr(String),
	timestamp	: SC.Record.attr(Date),
  	message		: SC.Record.attr(String)
});
