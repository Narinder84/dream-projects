/** @format */
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './components/navigation/navigation.component';
import QuoteGenerator from './components/quoteGenerator/quoteGenerator.component';
import InfiScroll from './components/infiScroll/infi.scroll';
import Picture from './components/pictureInPicture/pictureInPicture';

import './App.css';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={NavigationBar} />
				<Route exact path='/quote' component={QuoteGenerator} />
				<Route exact path='/infiniteScroll' component={InfiScroll} />
				<Route exact path='/picture' component={Picture} />
			</Switch>
		</div>
	);
}

export default App;
