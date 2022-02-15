import { useBlockProps, RichText } from '@wordpress/block-editor';

import './editor.scss';
import quote from "./quote.svg";
import avatar from "./avatar.png"

export default function save({ attributes }) {
	const { text, author, url, alt } = attributes;

	return (
		<div {...useBlockProps.save()} >
			<div className="quote">
				<div className="quote__content">
					<img
						src={quote}
						alt="quote"
						className="quote__icon"
					/>
					<div className="quote__text"><RichText.Content value={text} /></div>
				</div>
				<div className="quote__bottom">
					<img
						src={url ? url : avatar}
						alt={alt}
						className="quote__avatar"
					/>
					<div className="quote__author">
						<RichText.Content value={author} />
					</div>
				</div>
			</div>
		</div>
	);
}
