/** @format */
import React from 'react';

import './quoteGenerator.style.css';
import getQuote from './quote.utils';

class QuoteGenerator extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			quote: '',
		};
	}
	handleClick = async () => {
		const quote = await getQuote();
		this.setState({ ...this.state, quote: quote });
	};
	async componentDidMount() {
		const quote = await getQuote();
		this.setState({ ...this.state, quote: quote });
	}
	render() {
		const quote = this.state.quote;
		console.log(quote);
		return (
			<div className='Quote-page'>
				<div className='home-container'>
					<a href='/'>Home</a>
				</div>
				<div className='Quote-section'>
					<div className='Quote-container'>
						{/* -----Quote ---------------------------------- */}
						<div className='quote-text'>
							<i className='fas fa-quote-left'></i>
							<span id='quote'> {' ' + quote.text}</span>
						</div>
						{/* ---------Author------------------- */}
						<div className='quote-author'>
							<span id='author'>{quote.author}</span>
						</div>
						{/* --------------------Buttons--------------------- */}
						<div className='button-container'>
							<button
								className='twitter-button'
								id='twitter'
								title='This is Twitter'>
								<i className='fab fa-twitter'></i>
							</button>
							<button id='new-quote' onClick={this.handleClick}>
								New Quote
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default QuoteGenerator;
