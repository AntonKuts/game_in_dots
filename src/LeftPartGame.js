import React, { useState } from 'react';
import FormContainer from './form/FormContainer';
import Massage from './Massage';
import PlayingField from './game/PlayingField';

export const buttonTypeContext = React.createContext('play');

const LeftPartGame = () => {

    const [name, setName] = useState('');
    const [field, setField] = useState(0);
    const [delay, setDelay] = useState(0);
    const [step, setStep] = useState(0);
    const [playerPoint, setPlayerPoint] = useState(0);
    const [computerPoint, setComputerPoint] = useState(0);
    const [massageText, setMassageText] = useState('Step 0');
    const [buttonType, setButtonType] = useState('play');
    const numberOfFields = field * field;

    const clearAll =()=>{
        setField(0);
        setDelay(0);
        setStep(0);
        setPlayerPoint(0);
        setMassageText('');
        setButtonType('Play Again');
    };

    const submitForm =( formValues )=> {
        clearAll();
        setMassageText('Step 0');
        if (formValues?.name) setName(formValues?.name);
        if (formValues?.gameMode) {
            const formValuesInArr = formValues?.gameMode.split(',');
            setField(Number(formValuesInArr[0]));
            setDelay(Number(formValuesInArr[1]));
        }
        setButtonType('Сancel');
    };

    const Win =(winner)=> {
        clearAll();
        setMassageText(`${winner} is WIN!`);
    };

    const nextStep =()=> {
        setStep(step + 1);
        setMassageText(`Step ${step + 1} ${playerPoint}/${computerPoint}`);
    };

    const clickOnActiveField =(actor)=> {
        console.log('actor --- ', actor);
        if (actor === 'computer') {
            if ( computerPoint + 1 > numberOfFields / 2) {
                Win(actor);
            } else {
                setComputerPoint(computerPoint + 1);
                nextStep();
            }
        } else {
            if ( playerPoint + 1 > numberOfFields / 2) {
                Win(name);
            } else {
                setPlayerPoint(playerPoint + 1);
                nextStep();
            }
        }
    };

    return (
        <buttonTypeContext.Provider value={buttonType}>
            <div className="left-part-game part">
                <h2>Game in dots</h2>
                <FormContainer submitForm={submitForm} />
                <Massage massageText={massageText} />
                {field
                    ? <PlayingField
                        step={step}
                        field={field}
                        delay={delay}
                        numberOfFields={numberOfFields}
                        clickOnActiveField={clickOnActiveField}
                    />
                    : ''
                }
            </div>
        </buttonTypeContext.Provider>
    )
};

export default LeftPartGame;
