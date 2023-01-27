module.exports = {
	status: 'wip',
	context: {
		label: 'Directory',
		active: 'search',
		action_category: '#',
		action_search: '#',
		tools: [
			{
				label: 'Category',
				options: [
					{
						label: 'All Categories'
					},
					{
						label: 'Category One',
						selected: true
					},
					{
						label: 'Another Category'
					}
				]
			}
		],
		search_placeholder: 'Search by name or department',
		results: '',
		category: ''
	},
	variants: [
		{
			name: 'default',
			label: 'No Results'
		},
		{
			name: 'results',
			context: {
				results: '10',
				category: 'Category One'
			}
		}
	]
};
