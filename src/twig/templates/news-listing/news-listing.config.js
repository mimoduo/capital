module.exports = {
	status: 'wip',
	context: {
		page: {
			classes: ['layout_listing'],
			title: 'News Listing'
		}
	},
	variants: [
		{
			name: 'category',
			context: {
				page: {
					title: 'News Category'
				}
			}
		},
		{
			name: 'no-results',
			context: {
				page: {
					title: 'News Results'
				}
			}
		}
	]
};
