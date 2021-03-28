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
		this.setState(
			(prevState) => ({
				...prevState,
				imagesLoaded: prevState.imagesLoaded + 1,
			}),
			() => {
				if (this.state.imagesLoaded === this.state.totalPics) {
					this.setState({ ...this.state, ready: true });
				}
			},
		);
	};
	async componentDidMount() {
		const data = await getPhotos();
		this.setState({ ...this.state, photos: data, totalPics: data.length });
		window.addEventListener('scroll', async () => {
			if (
				window.innerHeight + window.scrollY >=
					document.body.offsetHeight - 1000 &&
				this.state.ready
			) {
				const data = await getPhotos();
				const newData = [...this.state.photos, ...data];
				this.setState((prevState) => ({
					...prevState,
					photos: newData,
					totalPics: newData.length,
					ready: false,
				}));
			}
		});
	}

	render() {
		const photos = this.state.photos;
		console.log(photos);
		return (
			<div className='scroll-page'>
				<h1 className='heading'>Un Splash Infinite Scroll - API</h1>
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
