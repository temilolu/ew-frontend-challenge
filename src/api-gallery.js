const API_KEY = process.env.REACT_APP_API_KEY;

const listGallery = (url) => {
	return fetch(url, {
		method: 'GET',
		headers: { Authorization: `CLient-ID ${API_KEY}` }
	}).then((response) => {
		return response.json();
	});
};

export { listGallery };
