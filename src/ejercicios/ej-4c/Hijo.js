import React from 'react';

/*

Tal vez quieras ver esta documentación:
https://upmostly.com/tutorials/react-onclick-event-handling-with-examples
https://es.reactjs.org/docs/handling-events.html

*/

class Hijo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { lukesMessage: "NOOOOOO!" };
	}

	render() {
		return (
			<div className="alert alert-success">
				<h4>Hijo</h4>
				<button onClick={() => this.props.myFunction(this.state.lukesMessage)} className="btn btn-info">¡Dar click aquí!</button>
			</div>
		);
	}
};

export default Hijo;