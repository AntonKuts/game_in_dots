import React, { useState, useEffect } from 'react';
import LeftPartGame from './LeftPartGame';
import './GameInDots.css';
import getData from "./axios/getData";
import { winnerUrl, gameSettingsUrl } from './constants';

export const gameSettingsContext = React.createContext('');

const GameInDots = () => {

    const [winners, setWinners] = useState([]);
    const [gameSettings, setGameSettings] = useState([]);

    useEffect(() => {
        getData(winnerUrl, setWinners);
        getData(gameSettingsUrl, setGameSettings);
    }, []);

    console.log('winners -- ', winners);

    return (
        <gameSettingsContext.Provider value={gameSettings}>
            <div className="game-in-dots">
                <LeftPartGame />
                {/* <RightPartBoard /> */}
            </div>
        </gameSettingsContext.Provider>
    );
};

export default GameInDots;
