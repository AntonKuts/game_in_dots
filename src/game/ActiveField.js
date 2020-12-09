import React, { useState } from 'react';
import {number, func, object} from 'prop-types';
import {delayColorDisplay} from "../constants";

const ActiveField = (props) => {
    const { clickOnActiveField, fieldStyle, delay } = props;

    const [ backgroundColor, setBackgroundColor ] = useState('aqua');

    const clickOnActiveFieldNextStep = (actor) => {
        setBackgroundColor('aqua');
        clickOnActiveField(actor);
    };

    const clickOnActiveFieldStart = () => {
        setBackgroundColor('green');
        clearTimeout(timer);
        setTimeout(clickOnActiveFieldNextStep, delayColorDisplay, '');
    };

    const timeIsOver = () => {
        console.log('timeIsOver!!');
        setBackgroundColor('red');
        clearTimeout(timer);
        setTimeout(clickOnActiveFieldNextStep, delayColorDisplay, 'Computer');
    };

    const activeStyle = {...fieldStyle, backgroundColor: backgroundColor};

    const timer = setTimeout(timeIsOver, delay); // wrong

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
