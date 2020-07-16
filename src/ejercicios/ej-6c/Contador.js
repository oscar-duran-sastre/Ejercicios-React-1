import React from 'react';

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
                <p><b>Has dado {this.state.count} clicks</b></p>
                <button className="btn btn-info" onClick={this.sumaClick}>suma 1</button>
            </div>
        );
    }
};

export default Contador;