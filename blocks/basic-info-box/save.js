import { useBlockProps, RichText } from '@wordpress/block-editor';

import './editor.scss';

export default function save({ attributes }) {
	const { content } = attributes;

	return (
		<div {...useBlockProps.save()}>	
		 	<RichText.Content value={content} />
		</div>
	);
}
