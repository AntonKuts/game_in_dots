import React from 'react';
import {string} from "prop-types";

const Massege = ({ massageText }) => (
        <div className="massage-text">
            <p> { massageText } </p>
        </div>
    );

Massege.propTypes = {
    massageText: string,
};

Massege.defaultProps = {
    massageText: '',
};

export default Massege;
