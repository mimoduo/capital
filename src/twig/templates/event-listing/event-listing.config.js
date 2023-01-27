module.exports = {
	status: 'wip',
	context: {
		page: {
			classes: ['layout_listing']
		}
	},
	variants: [
		{
			name: 'category',
			context: {
				page: {
					title: 'Event Category'
				}
			}
		},
		{
			name: 'no-results',
			context: {
				page: {
					title: 'Event Results'
				}
			}
		}
	]
};
