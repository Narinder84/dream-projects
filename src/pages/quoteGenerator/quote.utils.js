/** @format */

export const getQuotes = async () => {
	const api = 'https://type.fit/api/quotes';
	try {
		const res = await fetch(api);
		const data = await res.json();

		return data;
	} catch (error) {}
};

export const getQuote = (data) => {
	const quote = data[Math.floor(Math.random() * data.length)];

	return quote;
};
