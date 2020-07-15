import React, { useState } from 'react';
import MyLabel from './MyLabel';
import Boton from './Boton';

const Contador = () => {
    const [clicks, setClicks] = useState(0);

    const sumaClick = () => {
        setClicks(clicks + 1);
    }

    return (
        <div className="alert alert-primary">
            <MyLabel result={clicks} />
            <Boton func={sumaClick} />
        </div>
    );
};

export default Contador;