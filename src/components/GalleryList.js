import React from 'react';
import GalleryItem from './GalleryItem';
import GalleryFilter from './GalleryFilter';

const GalleryList = ({
	gallery,
	selectSection,
	selectSort,
	selectWindow,
	SelectShowViral,
	handlerChange,
	handleSubmit
}) => {
	return (
		<div className='row'>
			<div className='col-md-3'>
				<GalleryFilter
					selectSection={selectSection}
					selectSort={selectSort}
					selectWindow={selectWindow}
					SelectShowViral={SelectShowViral}
					handlerChange={handlerChange}
					handleSubmit={handleSubmit}
				/>
			</div>

			<div className='col-md-9'>
				<div className='my-3 p-3 bg-white rounded shadow-sm'>
					<h4 className='border-bottom border-gray pb-2 mb-0'>Gallery</h4>
					<ul className='list-unstyled row'>
						{!gallery ? (
							<div className='spinner-border mx-auto mt-5' role='status'>
								<span className='sr-only'>Loading...</span>
							</div>
						) : (
							gallery.map((item) => <GalleryItem key={item.id} item={item} />)
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default GalleryList;
