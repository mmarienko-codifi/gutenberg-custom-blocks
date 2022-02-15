import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import save from './save';

registerBlockType('gutenberg-custom-blocks/custom-block', {
	edit: Edit,

	save,
});
