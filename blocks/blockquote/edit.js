import { useBlockProps, RichText, BlockControls, MediaReplaceFlow } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';

import './editor.scss';
import quote from "./quote.svg";
import avatar from "./avatar.png"

export default function Edit({ attributes, setAttributes }) {
	const { text, author, url, alt } = attributes;
	const onSelectImage = (image) => {
		setAttributes({ url: image.url, alt: image.alt });
	};
	return (
		<>
			<BlockControls group="inline">
				<MediaReplaceFlow
					onSelect={onSelectImage}
					name={<Icon icon="format-image" className="example-class" />}
				/>
			</BlockControls>
			<div {...useBlockProps()} >
				<div className="quote">
					<div className="quote__content">
						<img
							src={quote}
							alt="quote"
							className="quote__icon"
						/>
						<RichText
							onChange={(value) => setAttributes({ text: value })}
							value={text}
							placeholder="Text"
							className="quote__text"
						/>
					</div>
					<div className="quote__bottom">
						<img
							src={url ? url : avatar}
							alt={alt}
							className="quote__avatar"
						/>
						<RichText
							onChange={(value) => setAttributes({ author: value })}
							value={author}
							placeholder="Name"
							className="quote__author"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
