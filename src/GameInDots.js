import React, { useState, useEffect } from 'react';
import LeftPartGame from './LeftPartGame';
import RightPartBoard from './RightPartBoard';
import getData from "./axios/getData";
import { winnerUrl, gameSettingsUrl } from './constants';
import './css/GameInDots.css';

export const gameSettingsContext = React.createContext('');

const GameInDots = () => {

    const [winners, setWinners] = useState([]);
    const [gameSettings, setGameSettings] = useState([]);

    useEffect(() => {
        getData(winnerUrl, setWinners);
        getData(gameSettingsUrl, setGameSettings);
    }, []);

    return (
        <gameSettingsContext.Provider value={gameSettings}>
            <div className="game-in-dots">
                <LeftPartGame />
                {winners?.length
                    ? <RightPartBoard winners={winners}/>
                    : ''}

            </div>
        </gameSettingsContext.Provider>
    );
};

export default GameInDots;
