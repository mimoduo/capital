let items = [
	{
		image: '1',
		categories: [
			{
				label: 'Category 1',
				url: 'page-news-category.html'
			}
		],
		title: 'In Enim Justo Rhoncus Ut Lorem',
		url: 'page-news-detail.html',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est sed ex pretium fringilla. Vivamus ac turpis quis eros consectetur ornare.'
	},
	{
		image: '2',
		categories: [
			{
				label: 'Category One',
				url: 'page-news-category.html'
			},
			{
				label: 'Another Category',
				url: 'page-news-category.html'
			}
		],
		title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
		url: 'page-news-detail.html',
		description:
			'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.'
	},
	{
		image: '3',
		categories: [
			{
				label: 'Category',
				url: 'page-news-category.html'
			}
		],
		title: 'Etiam ultricies nisi vel augue',
		url: 'page-news-detail.html',
		description:
			'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'
	}
];

module.exports = {
	status: 'wip',
	context: {
		title: 'Related News',
		description:
			'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auct.',
		items: items
	},
	default: 'three-up',
	variants: [
		{
			name: 'three-up',
			context: {
				items: items.slice(0, 3)
			}
		},
		{
			name: 'two-up',
			context: {
				items: items.slice(0, 2)
			}
		}
	]
};
