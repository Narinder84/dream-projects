/** @format */
import './navigation.style.css';

const NavigationBar = () => {
	return (
		<div className='nav-container'>
			<a href='quote'>Quote Generator</a>
			<a href='infiniteScroll'>Infinite Scroll</a>
			<a href='picture'>Picture in Picture</a>
			<a href='jokeTeller'>JokeTeller</a>
			<a href='darkAndLight'>Dark And Light Mode</a>
		</div>
	);
};

export default NavigationBar;
