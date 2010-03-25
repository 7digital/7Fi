SevenFi.Artist = SC.Record.extend(
/** @scope SevenFi.Artist.prototype */ {
	primaryKey 	: "id",
	name 		: SC.Record.attr(String),
	id 			: SC.Record.attr(Number),
	picture_url	: SC.Record.attr(String)
});
