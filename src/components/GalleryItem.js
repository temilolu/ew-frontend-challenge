import React, { Suspense, lazy } from 'react';

import { Link } from 'react-router-dom';

const ImageItem = lazy(() => import('./ImageItem'));

const GalleryItem = ({ item }) => {
	return (
		<li className='col-md-4'>
			<Link to={`/details/${item.id}`}>
				<div className='media text-muted pt-3'>
					<div className='card' style={{ width: '18rem' }}>
						<Suspense fallback={<div>Loading...</div>}>
							{item.images ? (
								<ImageItem
									image={!item.images ? 'Loading...' : item.images[0]}
								/>
							) : (
								<div
									className='overflow-hidden'
									style={{
										height: '10rem',
										padding: '10px'
									}}>
									No images found :)
								</div>
							)}
						</Suspense>

						<div className='card-body'>
							<h5 className='card-title text-truncate'>{item.title}</h5>
						</div>
					</div>
				</div>
			</Link>
		</li>
	);
};
export default GalleryItem;
