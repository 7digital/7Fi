SevenFi.Task = SC.Record.extend(
/** @scope SevenFi.Task.prototype */ {
	primaryKey 	: "guid",
    guid		: SC.Record.attr(String),
	isDone		: SC.Record.attr(Boolean),
  	description	: SC.Record.attr(String)
});
