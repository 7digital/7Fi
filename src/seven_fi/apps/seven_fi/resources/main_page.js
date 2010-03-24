 SevenFi.mainPage = SC.Page.design({
	mainPane: SC.MainPane.design({
		childViews: 'middleView topView bottomView'.w(),

		topView: SC.ToolbarView.design({
			layout: { top: 0, left: 0, right: 0, height: 36 },
			childViews: 'labelView addButton'.w(),
			anchorLocation: SC.ANCHOR_TOP,

			labelView: SC.LabelView.design({
				layout: { centerY: 0, height: 24, left: 8, width: 200 },
				controlSize: SC.LARGE_CONTROL_SIZE,
				fontWeight: SC.BOLD_WEIGHT,
				value:   '7Fi'
			}),

			addButton: SC.ButtonView.design({
				layout: { centerY: 0, height: 24, right: 12, width: 100 },
				title:  "Do sommit",
				action : 'SevenFi.tasksController.onDoSommit'
			})
		}),

		middleView: SC.ScrollView.design({
			hasHorizontalScroller: NO,
			layout: { top: 36, bottom: 32, left: 0, right: 0 },
			backgroundColor: '#f0f0f0',

			contentView: SC.ListView.design({
				contentBinding		: 'SevenFi.tasksController.arrangedObjects',
  				selectionBinding	: 'SevenFi.tasksController.selection',
				contentValueKey		: 'description',
  				contentCheckboxKey	: 'isDone',
  				rowHeight			: 21
			})
		}),

		bottomView: SC.ToolbarView.design({
			layout: { bottom: 0, left: 0, right: 0, height: 32 },
			childViews: 'summaryView'.w(),
			anchorLocation: SC.ANCHOR_BOTTOM,

			summaryView: SC.LabelView.design({
				layout		: { centerY: 0, height: 18, left: 20, right: 20 },
				textAlign	: SC.ALIGN_CENTER,
				valueBinding: "SevenFi.tasksController.summary"
			})
		})
	})
});