import React from 'react';
import Hijo from "./Hijo";

class Padre extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "Hola Mundo" };
    }

    render() {
        return (
            <div className="alert alert-primary">
                <h4>Padre</h4>
                <Hijo text={this.state.text} />
            </div>
        );
    }
};

export default Padre;