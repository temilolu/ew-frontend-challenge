import React from 'react';

const GalleryDetails = ({ title, images, description, ups, downs, score }) => {
	return (
		<React.Fragment>
			<div className='my-3 p-3 bg-white rounded shadow-sm'>
				<h2 className='border-bottom border-gray pb-2 mb-0 mb-5'>{title}</h2>

				<div>
					<p>
						<strong>Description: </strong>
						{!description ? 'No description' : description}{' '}
					</p>
					<p>
						<strong>Upvotes: </strong> {ups}
					</p>
					<p>
						<strong>Downvotes: </strong> {downs}
					</p>
					<p>
						<strong>Score: </strong>: {score}
					</p>
				</div>

				<div className='my-3'>
					<ul className='list-unstyled'>
						{!images
							? 'No image found :)'
							: images.map((item, i) => (
									<li key={i} className='mb-3'>
										{item.type === 'video/mp4' ? (
											<video className='img-thumbnail'>
												<source src={item.link} type='video/mp4' />
											</video>
										) : (
											<img
												src={item.link}
												className='img-thumbnail'
												alt={item.title}
											/>
										)}
									</li>
							  ))}
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
};

export default GalleryDetails;
