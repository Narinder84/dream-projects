/** @format */
const key = 'OTuziHoun6V8Sgvgju57NYmVYQxUtbY3sBiONjydqfc';
const urlapi = `https://api.unsplash.com/photos/random?client_id=${key}&&count=30`;

export const getPhotos = async () => {
	const response = await fetch(urlapi);
	return response.json();
};
