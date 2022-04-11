import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({ attributes }) {
	return (
		<div {...useBlockProps()}>
		</div>
	);
}
