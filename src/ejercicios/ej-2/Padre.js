import React from 'react';
import Hijo from "./Hijo";

const Padre = () => {
    const printText = () => {
        console.log("Luke, yo soy tu padre");
    };

    return (
        <div className="alert alert-primary">
            <h4>Padre</h4>
            <Hijo func={printText} />
        </div>
    );
};

export default Padre;