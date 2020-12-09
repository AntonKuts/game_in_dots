import React, { useState } from 'react';
import {number, func, object} from 'prop-types';
import {delayColorDisplay} from "../constants";

const ActiveField = (props) => {
    const { clickOnActiveField, fieldStyle, startTimer } = props;

    const [ backgroundColor, setBackgroundColor ] = useState('aqua');

    const clickOnActiveFieldNextStep = (actor) => {
        setBackgroundColor('aqua');
        clickOnActiveField(actor);

    };

    const clickOnActiveFieldStart = () => {
        setBackgroundColor('green');
        setTimeout(clickOnActiveFieldNextStep, delayColorDisplay, '');
    };

    const timeIsOver = () => {
        console.log('timeIsOver!!');
        setBackgroundColor('red');
        setTimeout(clickOnActiveFieldNextStep, delayColorDisplay, 'Computer');
    };

    const activeStyle = {...fieldStyle, backgroundColor: backgroundColor};

    return (
        <div
            className="active-field"
            onClick={clickOnActiveFieldStart}
            style={activeStyle}
        />
    );
};

ActiveField.propTypes = {
    clickOnActiveField: func,
    emptyStyle: object,
    delay: number.isRequired,
};
ActiveField.defaultProps = {
    clickOnActiveField: ()=>{},
    emptyStyle: {},
};

export default ActiveField;
