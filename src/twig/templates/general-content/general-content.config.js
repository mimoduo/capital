let config = require(`${process.env.INIT_CWD}/config.json`);

module.exports = {
	status: 'wip',
	context: {
		page: {
			title: 'General Content',
			subNav: config.navigation.sub
		}
	},
	variants: [
		{
			name: 'alert',
			context: {
				page: {
					alert: true
				}
			}
		},
		{
			name: 'photo',
			context: {
				page: {
					image: '1'
				}
			}
		},
		{
			name: 'video',
			context: {
				page: {
					video: {
						type: 'vimeo',
						id: '258133523',
						title: 'Fastspot Moments'
					},
					image: '1'
				}
			}
		},
		{
			name: 'bg',
			label: 'Background',
			context: {
				page: {
					video: {
						type: 'youtube',
						id: 'XPjQhvjQbSM',
						title: 'Fastspot - Our Methodology'
					},
					image: '1'
				}
			}
		}
	]
};
