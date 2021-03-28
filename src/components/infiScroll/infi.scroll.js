/** @format */

import React from 'react';
import { getPhotos } from './infi.utills';

import './infiScroll.style.css';

class InfiScroll extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			imagesLoaded: 0,
			totalPics: 0,
			ready: false,
		};
	}
	imagesLoaded = () => {
		console.log('Load.....');

		this.setState(
			(prevState) => ({
				...prevState,
				imagesLoaded: prevState.imagesLoaded + 1,
			}),
			() => {
				if (this.state.totalPics === this.state.imagesLoaded) {
					this.setState({ ...this.state, ready: true });
				}
			},
		);
	};
	async componentDidMount() {
		const data = await getPhotos();
		console.log('===mounting====');
		this.setState({ ...this.state, photos: data, totalPics: data.length });
		window.addEventListener('scroll', async () => {
			console.log(this.state.ready, '===scroll trigger');
			if (
				this.state.ready === true &&
				window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000
			) {
				this.setState({ ready: false });
				console.log(
					this.state.ready === true &&
						window.innerHeight + window.scrollY >=
							document.body.offsetHeight - 1000,
				);
				console.log(this.state.ready, '<<<<<<<<<<<<<<<');
				const data = await getPhotos();
				console.log(
					'fetching in progress___________________',
					this.state.ready,
				);
				const newData = [...this.state.photos, ...data];
				console.log('fetched >>>>>>>>', newData);
				this.setState((prevState) => ({
					...prevState,
					photos: newData,
					totalPics: newData.length,
				}));
			}
		});
	}

	render() {
		console.log(this.state);
		const photos = this.state.photos;

		return (
			<div className='scroll-page'>
				<div className='home-container'>
					<a href='/'>Home</a>
				</div>
				<div className='heading-container'>
					<h1 className='heading'>Un Splash Infinite Scroll - API</h1>
				</div>
				{photos.length === 0 ? (
					<div className='loader-continer'>
						<div className='loader'>
							<img src='./NewSpin.svg' alt='' />
						</div>
					</div>
				) : (
					photos.map((pic, indx) => (
						<div className='img-div' key={indx}>
							<img src={pic.urls.regular} alt='' onLoad={this.imagesLoaded} />
						</div>
					))
				)}
			</div>
		);
	}
}
export default InfiScroll;
