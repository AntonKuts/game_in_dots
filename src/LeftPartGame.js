import React from 'react';
import FormContainer from './FormContainer';
import {object} from "prop-types";
import FormComponent from "./FormComponent";

const LeftPartGame = () => {

    return (
        <div className="leftPartGame">
           <FormContainer />
           {/* <Message /> */}
           {/* <playingField /> */}
        </div>
    )
};

FormComponent.propTypes = {
    gameSettings: object.isRequired,
};

export default LeftPartGame;
