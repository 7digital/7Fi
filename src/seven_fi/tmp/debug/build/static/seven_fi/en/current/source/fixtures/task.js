sc_require('models/task');

SevenFi.Task.FIXTURES = [
	{
		"guid": "task-1",
    	"description": "Build my first SproutCore app",
    	"isDone": false
  	},
  	{
		"guid": "task-2",
    	"description": "Build a really awesome SproutCore app",
    	"isDone": true
	},
 	{
		"guid": "task-3",
    	"description": "Next, the world!",
    	"isDone": false
	}
];
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('seven_fi');