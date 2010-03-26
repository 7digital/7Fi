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

		middleView: SC.ScrollView.design({
			hasHorizontalScroller: NO,
			layout: { top: 36, bottom: 32, left: 0, right: 0 },
			backgroundColor: '#f0f0f0',

			contentView: SC.ListView.design({
				contentBinding		: 'SevenFi.tasksController.arrangedObjects',
  				selectionBinding	: 'SevenFi.tasksController.selection',
				contentValueKey		: 'name',
  				rowHeight			: 21
			})
		}),

		bottomView: SC.ToolbarView.design({
			layout: { bottom: 0, left: 0, right: 0, height: 32 },
			childViews: 'summaryView logView'.w(),
			anchorLocation: SC.ANCHOR_BOTTOM,

			summaryView: SC.LabelView.design({
				layout		: { centerY: 0, height: 18, left: 8 },
				textAlign	: SC.ALIGN_LEFT,
				valueBinding: "SevenFi.tasksController.summary"
			}),

			logView : SC.LabelView.design({
				contentBinding	: 'SevenFi.logController.arrangedObjects',
				layout			: { centerY: 0, height: 18, right: 8 },
				textAlign		: SC.ALIGN_RIGHT,
				valueBinding	: "SevenFi.tasksController.log"
			})
		})
	})
});