import { useBlockProps, RichText } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { content } = attributes;

	return (
		<div {...useBlockProps()}>
			<div className="info">
				<div className='info__content'>
					<RichText
						onChange={(value) => setAttributes({ content: value })}
						value={content}
						placeholder="Name"
					/>
				</div>
			</div>
		</div>
	);
}
