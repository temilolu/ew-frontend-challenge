import React from 'react';

const GalleryFilter = ({
	selectSort,
	selectSection,
	selectWindow,
	SelectShowViral,
	handlerChange,
	handleSubmit
}) => {
	return (
		<div className='my-3 p-3 bg-white rounded shadow-sm'>
			<h4 className='border-bottom border-gray pb-2 mb-0'>Filter Gallery</h4>

			<form>
				<div className='my-3'>
					<label htmlFor='section'>Gallery Section</label>
					<select
						className='custom-select'
						name='section'
						onChange={handlerChange}
						value={selectSection}>
						<option value='hot'>Hot</option>
						<option value='top'>Top</option>
						<option value='user'>User</option>
					</select>
				</div>
				<div className='my-3'>
					<label htmlFor='sort'>Sort paarameters</label>
					<select
						className='custom-select'
						name='sort'
						onChange={handlerChange}
						value={selectSort}>
						<option value='viral'>Viral</option>
						<option value='top'>Top</option>
						<option value='time'>Time</option>
						<option value='rising'>Rising</option>
					</select>
				</div>

				<div className='my-3'>
					<label htmlFor='window'>Window paarameters</label>
					<select
						className='custom-select'
						name='showWindow'
						onChange={handlerChange}
						value={selectWindow}>
						<option value='day'>Day</option>
						<option value='week'>Week</option>
						<option value='month'>Month</option>
						<option value='year'>Year</option>
					</select>
				</div>
				<div className='my-3'>
					<label htmlFor='showViral'>See Viral images</label>
					<br />
					<small>(Note: Set Gallery section to user)</small>
					<select
						className='custom-select'
						name='showViral'
						onChange={handlerChange}
						value={SelectShowViral}>
						<option value='true'>Yes</option>
						<option value='false'>No</option>
					</select>
				</div>

				<div className='my-3'>
					<button type='button' className='btn btn-dark' onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default GalleryFilter;
