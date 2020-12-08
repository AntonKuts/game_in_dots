import React from 'react';
import {func} from 'prop-types';
import {borderBrWidth, widthAndHeightField} from "./constants";

const ActiveField = (props) => {
    const { clickOnActiveField } = props;

    return (
        <div
            className="active-field"
            onClick={clickOnActiveField}
            style={{
                width: `${widthAndHeightField}px`,
                height: `${widthAndHeightField}px`,
                border: `${borderBrWidth}px solid grey`}}
        />
    );
};

ActiveField.propTypes = {
    clickOnActiveField: func,
};
ActiveField.defaultProps = {
    clickOnActiveField: ()=>{}
};


export default ActiveField;
