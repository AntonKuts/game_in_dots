import React, { useState, useEffect } from 'react';
import {number, func, object} from 'prop-types';
import {delayColorDisplay} from "../constants";

const ActiveField = (props) => {
    const {
        clickOnActiveField,
        fieldStyle,
        delay,
    } = props;
    const [ backgroundColor, setBackgroundColor ] = useState('aqua');
    const [ alredyClick, setAlredyClick ] = useState(false);

    useEffect(() => {
        setTimeout(timeIsOver, delay);
    }, [delay]);

    const clickOnActiveFieldStart = () => {
        setBackgroundColor('green');
        setAlredyClick(true);
        setTimeout(clickOnActiveFieldNextStep, delayColorDisplay, '');
    };

    const clickOnActiveFieldNextStep = (actor) => {
        setBackgroundColor('aqua');
        clickOnActiveField(actor);

    };

    const timeIsOver = () => {
        if (!alredyClick) {
            setBackgroundColor('red');
            setTimeout(clickOnActiveFieldNextStep, delayColorDisplay, 'Computer');
        }
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
