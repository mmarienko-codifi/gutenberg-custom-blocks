import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit() {
	return (
		<p {...useBlockProps()}>
			Gutenberg Custom Blocks – hello from the editor!
		</p>
	);
}
