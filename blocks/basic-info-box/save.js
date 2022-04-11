import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>	
		</div>
	);
}
