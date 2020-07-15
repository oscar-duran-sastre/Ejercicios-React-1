import React, { useState } from 'react';
import Contador from './Contador';

const Boton = () => {
    const [clicks, setClicks] = useState(0);

    const sumaClick = () => {
        setClicks(clicks + 1);
        return Contador(clicks);
    }

    return (
        <button className="btn btn-info" onClick={sumaClick}>suma 1</button>
    );
};

export default Boton;