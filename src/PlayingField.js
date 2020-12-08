import React from 'react';
import { number, func } from "prop-types";
import { widthAndHeightField, borderBrWidth } from './constants';
import ActiveField from "./ActiveField";

const PlayingField = (props) => {

    const {
        step,
        field,
        delay,
        numberOfFields,
        clickOnActiveField
    }= props;

    const squareNumbers = [...[...[...Array(numberOfFields).keys()]]]; // 25 --> 1, 2, 3, 4 ....
    const activeFieldQueue = [...squareNumbers].sort( () => 0.5-Math.random()); // 25 --> 10, 3, 5, 8 ....

    if (field < 4 || delay < 900 || field > 15) return ''; //

    const widthMainFieldFromSquareNumbers = (field * widthAndHeightField) + (field * (borderBrWidth * 2));
    // ex: Field 5 --> 250 + 20 = 270;

    return (
        <div
            className="playing-field"
            style={{ width: `${widthMainFieldFromSquareNumbers}px`}}
        >
            { squareNumbers.map((index) =>
                index === activeFieldQueue[step] // position of ActiveField
                ? <ActiveField key={index} clickOnActiveField={clickOnActiveField} />
                : (
                    <div
                        key={index}
                        className="empty-field"
                        style={{
                            width: `${widthAndHeightField}px`,
                            height: `${widthAndHeightField}px`,
                            border: `${borderBrWidth}px solid grey`}}
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
    clickOnActiveField: func,
};

PlayingField.defaultProps = {
    step: 0,
    field: 0,
    delay: 0,
    numberOfFields: 0,
    clickOnActiveField: ()=>{},
};

export default PlayingField;
