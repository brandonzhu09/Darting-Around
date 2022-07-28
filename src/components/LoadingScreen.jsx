import React from 'react';
import { BarLoader, BounceLoader, BeatLoader } from 'react-spinners';

function LoadingScreen() {

    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

    return ( 
        <div style={style}>
            <BeatLoader />
        </div>
     );
}

export default LoadingScreen;