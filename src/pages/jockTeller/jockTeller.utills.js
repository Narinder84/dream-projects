/** @format */
export const getJock = async () => {
	const urlApi =
		'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
	let joke = ' ';
	try {
		const response = await fetch(urlApi);
		const data = await response.json();
		if (data.setup) {
			joke = `${data.setup}....${data.delivery}`;
			return joke;
		} else {
			joke = data.joke;
			return joke;
		}
	} catch (error) {}
};
