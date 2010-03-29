SevenFi.Artist = SC.Record.extend(
/** @scope SevenFi.Artist.prototype */ {
	primaryKey 	: "id",
	id 			: SC.Record.attr(Number),
	name 		: SC.Record.attr(String),
	picture_url	: SC.Record.attr(String)
});
