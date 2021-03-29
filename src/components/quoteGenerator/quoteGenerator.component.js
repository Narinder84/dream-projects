/** @format */
import React from 'react';

import './quoteGenerator.style.css';
import { getQuotes, getQuote } from './quote.utils';

class QuoteGenerator extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			quotes: '',
		};
	}
	handleClick = async () => {
		this.setState({ ...this.state });
	};
	async componentDidMount() {
		const quotes = await getQuotes();

		this.setState({ ...this.state, quotes: quotes });
	}
	render() {
		console.log(this.state.quotes);
		const quote = getQuote(this.state.quotes);

		return (
			<div className='Quote-page'>
				<div className='home-container'>
					<a href='/'>Home</a>
				</div>
				<div className='Quote-section'>
					{quote ? (
						<div className='Quote-container'>
							{/* -----Quote ---------------------------------- */}
							<div className='quote-text'>
								<i className='fas fa-quote-left'></i>
								<span id='quote'>{quote.text}</span>
							</div>
							{/* ---------Author------------------- */}
							<div className='quote-author'>
								<span id='author'>
									{quote.author ? quote.author : 'Unknown'}
								</span>
							</div>
							{/* --------------------Buttons--------------------- */}
							<div className='button-container'>
								<button
									className=' btn twitter-button'
									id='twitter'
									title='This is Twitter'>
									<i className='fab fa-twitter'></i>
								</button>
								<button
									className='btn'
									id='new-quote'
									onClick={this.handleClick}>
									New Quote
								</button>
							</div>
						</div>
					) : (
						<div class='loader'></div>
					)}
				</div>
			</div>
		);
	}
}

export default QuoteGenerator;
