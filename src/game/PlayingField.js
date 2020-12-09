import React from 'react';
import { number, func } from "prop-types";
import { widthAndHeightField, borderBrWidth } from '../constants';
import ActiveField from "./ActiveField";

const PlayingField = (props) => {

    const {
        step,
        field,
        delay,
        numberOfFields,
        clickOnActiveField
    }= props;

    if (field < 4 || field > 15 || delay < 900 || delay > 5000) return ''; //

    const squareNumbers = [...[...[...Array(numberOfFields).keys()]]]; // 25 --> 1, 2, 3, 4 ....
    const activeFieldQueue = [...squareNumbers].sort( () => 0.5-Math.random()); // 25 --> 10, 3, 5, 8 ....
    const widthMainFieldFromSquareNumbers = (field * widthAndHeightField) + (field * (borderBrWidth * 2));
    // ex: Field 5 --> 125 + 20 = 145;

    const fieldStyle = {
        width: `${widthAndHeightField}px`,
        height: `${widthAndHeightField}px`,
        border: `${borderBrWidth}px solid grey`,
    };

    return (
        <div
            className="playing-field"
            style={{ width: `${widthMainFieldFromSquareNumbers}px`}}
        >
            { squareNumbers.map((index) =>
                index === activeFieldQueue[step] // position of Active Field
                ? <ActiveField
                        key={index}
                        delay={delay}
                        fieldStyle={fieldStyle}
                        clickOnActiveField={clickOnActiveField}
                    />
                : (
                    <div
                        key={index}
                        className="empty-field"
                        style={fieldStyle}
                    />
                )
            )}
        </div>
    );
};

PlayingField.propTypes = {
    step: number,
    field: number,
    delay: number,
    numberOfFields: number,
    clickOnActiveFieldStart: func,
};

PlayingField.defaultProps = {
    step: 0,
    field: 0,
    delay: 0,
    numberOfFields: 0,
    clickOnActiveFieldStart: ()=>{},
};

export default PlayingField;
