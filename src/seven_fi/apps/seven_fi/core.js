SevenFi = SC.Application.create(
  /** @scope SevenFi.prototype */ {
	NAMESPACE	: 'SevenFi',
	VERSION		: '0.1.0',

	// This is your application store.  You will use this store to access all
	// of your model data.  You can also set a data source on this store to
	// connect to a backend server.  The default setup below connects the store
	// to any fixtures you define.

	// store: SC.Store.create().from(SC.Record.fixtures)

	store : SC.Store.create({
		commitRecordsAutomatically: YES
	}).from('SevenFi.SearchDataSource'),

	trackStore : SC.Store.create({
		commitRecordsAutomatically: NO
	}).from('SevenFi.TrackDataSource'),

	log : SC.Store.create({
		commitRecordsAutomatically: NO
	}).from('SevenFi.LogDataSource') 
           
  	// TODO: Add global constants or singleton objects needed by your app here.
}) ;
