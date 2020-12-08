import React from 'react';
import FormContainer from './FormContainer';
import Massage from './Massage';

const LeftPartGame = () => {

    return (
        <div className="left-part-game">
           <FormContainer />
            <Massage massageText="text" />
           {/* <playingField /> */}
        </div>
    )
};

export default LeftPartGame;
