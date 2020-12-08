import React from 'react';
import { string } from "prop-types";

const Massage = ({ massageText }) => (
        <div className="massage-text">
            <h2> { massageText } </h2>
        </div>
    );

Massage.propTypes = {
    massageText: string,
};

Massage.defaultProps = {
    massageText: '',
};

export default Massage;
