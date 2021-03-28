/** @format */
import React from 'react';
class Picture extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}
	updateCount = () => {
		this.setState({ count: this.state.count + 1 }, () => {});

		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<div>
				<button onClick={this.updateCount}>Up date count</button>
				<h1>count:{this.state.count}</h1>
			</div>
		);
	}
}

export default Picture;
