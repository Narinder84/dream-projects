/** @format */
import { Route, Switch } from 'react-router-dom';
import OtherProjects from './pages/navigation/navigation.component';
import QuoteGenerator from './pages/quoteGenerator/quoteGenerator.component';
import InfiScroll from './pages/infiScroll/infi.scroll';
import Picture from './pages/pictureInPicture/pictureInPicture';
import JockTeller from './pages/jockTeller/jockTeller';
import DarkAndLight from './pages/lightDark/darkLight';

import './App.css';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/projects' component={OtherProjects} />
				<Route exact path='/quote' component={QuoteGenerator} />
				<Route exact path='/infiniteScroll' component={InfiScroll} />
				<Route exact path='/picture' component={Picture} />
				<Route exact path='/jokeTeller' component={JockTeller} />
				<Route exact path='/' component={DarkAndLight} />
			</Switch>
		</div>
	);
}

export default App;
