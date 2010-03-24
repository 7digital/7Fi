SevenFi.tasksController = SC.ArrayController.create(
/** @scope SevenFi.tasksController.prototype */ {
	summary: function() {
    	var len = this.get('length'), ret ;

    	if (len && len > 0) {
      		ret = len === 1 ? "1 task" : "%@ tasks".fmt(len);
    	} else ret = "No tasks";

    	return ret;
  	}.property('length').cacheable()  
}) ;