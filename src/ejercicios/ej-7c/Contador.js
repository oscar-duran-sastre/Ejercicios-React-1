import React from 'react';
import MyLabel from './MyLabel';
import Boton from './Boton';

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    sumaClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div className="alert alert-primary">
                <MyLabel result={this.state.count} />
                <Boton sum={this.sumaClick} />
            </div>
        );
    }
};

export default Contador;