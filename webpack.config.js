const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...defaultConfig,
	entry: {
		'custom-block': './blocks/custom-block',
		'basic-info-box': './blocks/basic-info-box'
	},
};