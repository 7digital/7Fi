 SevenFi.mainPage = SC.Page.design({
	mainPane: SC.MainPane.design({
		childViews: 'middleView topView bottomView'.w(),

		topView: SC.ToolbarView.design({
			layout: { top: 0, left: 0, right: 0, height: 36 },
			childViews: 'searchButton searchTextBox labelView'.w(),
			anchorLocation: SC.ANCHOR_TOP,

			labelView: SC.LabelView.design({
				layout: { centerY: 0, height: 24, right: 8, width: 50 },
				controlSize: SC.LARGE_CONTROL_SIZE,
				fontWeight: SC.BOLD_WEIGHT,
				value:   '7Fi'
			}),

			searchButton: SC.ButtonView.design({
				layout: { centerY: 0, height: 24, left: 8, width: 100 },
				title:  "Search",
				action : 'SevenFi.tasksController.search'
			}),

			searchTextBox: SC.TextFieldView.design({
				layout: { centerY: 0, height: 24, left: 120, width: 200 },
				controlSize: SC.LARGE_CONTROL_SIZE,
				fontWeight: SC.BOLD_WEIGHT,
				hint : "Type in here to search",
				value : 'chubby'
			})
		}),

		middleView: SC.ScrollView.design(SC.Animatable, {
			transitions: {
				opacity	: { duration: .5, timing: SC.Animatable.TRANSITION_CSS_EASE_IN_OUT },
				display	: .75
  			},
			hasHorizontalScroller: NO,
			layout: { top: 36, bottom: 32, left: 0, right: 0 },
			backgroundColor: '#f0f0f0',
			childViews: 'contentView'.w(),

			contentView : SC.ListView.design({
				contentBinding		: 'SevenFi.tasksController.arrangedObjects',
  				selectionBinding	: 'SevenFi.tasksController.selection',
				contentValueKey		: 'name',
  				rowHeight			: 21,
				showAlternatingRows	: YES,
				actOnSelect 		: YES,
				target				: 'SevenFi.tasksController',
				action				: 'onSelected'
			})
		}),

		bottomView: SC.ToolbarView.design({
			layout: { bottom: 0, left: 0, right: 0, height: 32 },
			childViews: 'summaryView statusView'.w(),
			anchorLocation: SC.ANCHOR_BOTTOM,

			summaryView: SC.LabelView.design({
				layout		: { centerY: 0, height: 18, left: 8 },
				textAlign	: SC.ALIGN_LEFT,
				valueBinding: "SevenFi.tasksController.summary"
			}),

			statusView: SC.LabelView.design({
				layout		: { centerY: 0, height: 18, right: 8 },
				textAlign	: SC.ALIGN_RIGHT,
				valueBinding: "SevenFi.logController.summary",
				borderStyle	: SC.BORDER_BEZEL
			})

//			logView : SC.ListView.design({
//				contentBinding		: 'SevenFi.logController.arrangedObjects',
//				selectionBinding	: 'SevenFi.logController.selection',
//				contentValueKey		: 'message',
//				rowHeight			: 21
//			})
		})
	})
});