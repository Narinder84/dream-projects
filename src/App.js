/** @format */
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './components/navigation/navigation.component';
import QuoteGenerator from './components/quoteGenerator/quoteGenerator.component';
import InfiScroll from './components/infiScroll/infi.scroll';
import Picture from './components/pictureInPicture/pictureInPicture';
import JockTeller from './components/jockTeller/jockTeller';
import DarkAndLight from './components/darkLightMode/darkLight';

import './App.css';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={NavigationBar} />
				<Route exact path='/quote' component={QuoteGenerator} />
				<Route exact path='/infiniteScroll' component={InfiScroll} />
				<Route exact path='/picture' component={Picture} />
				<Route exact path='/jokeTeller' component={JockTeller} />
				<Route exact path='/darkAndLight' component={DarkAndLight} />
			</Switch>
		</div>
	);
}

export default App;
