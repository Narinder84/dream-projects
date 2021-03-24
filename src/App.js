/** @format */
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './components/navigation/navigation.component';
import QuoteGenerator from './components/quoteGenerator/quoteGenerator.component';
import './App.css';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={NavigationBar} />
				<Route exact path='/quote' component={QuoteGenerator} />
			</Switch>
		</div>
	);
}

export default App;
