import React from 'react';
import { array } from "prop-types";

const RightPartBoard = (props) => {

    const { winners }= props;

    return (
        <div className="right-part-board part">
            <h2>Leader Board</h2>
            { winners.map((oneWinner, index) =>
                    <div key={oneWinner?.id + index} className="winner">
                        <p>{oneWinner?.winner}</p>
                        <p>{oneWinner?.date}</p>
                    </div>
                )
            }
        </div>
    );
};

RightPartBoard.propTypes = {
    winners: array.isRequired,
};

export default RightPartBoard;
