import React from 'react';

const ImageItem = ({ image }) => (
	<div
		className='overflow-hidden'
		style={{
			height: '10rem'
		}}>
		{image.type === 'video/mp4' ? (
			<video className='card-img-top'>
				<source src={image.link} type='video/mp4' />
			</video>
		) : (
			<img src={image.link} className='card-img-top' alt={image.title} />
		)}
	</div>
);

export default ImageItem;
