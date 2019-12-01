const API_KEY = process.env.api_key;

const listGallery = (url) => {
	return fetch(url, {
		method: 'GET',
		headers: { Authorization: `CLient-ID ${API_KEY}` }
	}).then((response) => {
		return response.json();
	});
};

export { listGallery };
