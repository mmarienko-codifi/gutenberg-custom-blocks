const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...defaultConfig,
	entry: {
		'custom-block': './blocks/custom-block',
		'blockquote': './blocks/blockquote'
	},
};