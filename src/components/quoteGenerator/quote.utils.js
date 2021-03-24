/** @format */

const getQuote = async () => {
	const api = 'https://type.fit/api/quotes';
	try {
		const res = await fetch(api);
		const data = await res.json();

		const quote = data[Math.floor(Math.random() * data.length)];
		console.log(quote);
		return quote;
	} catch (error) {}
};

export default getQuote;
