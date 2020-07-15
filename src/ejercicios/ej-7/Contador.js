import React from 'react';
import MyLabel from './MyLabel';
import Boton from './Boton';

const Contador = (props) => {



    return (
        <div className="alert alert-primary">
            <MyLabel number={props.clicks} />
            <Boton />
        </div>
    );
};

export default Contador;