import React, { useContext } from 'react';
import { Field } from 'react-final-form';
import {func} from 'prop-types';
import { gameSettingsContext } from './GameInDots';
import { buttonTypeContext } from './LeftPartGame';
import SelectField from './SelectField';
import getGameSettingsForSelect from './helpers/getGameSettingsForSelect';

const FormComponent = (props) => {

    const { handleSubmit } = props;
    const gameSettings = useContext(gameSettingsContext);
    const buttonType = useContext(buttonTypeContext);

    return (
        <form className="form-body" onSubmit={handleSubmit}>
            <div className="game-mode-input-box box">
                <Field
                    name="gameMode"
                    options={getGameSettingsForSelect(gameSettings)}
                >
                    { ({input, meta, options}) =>  (
                        <>
                            <SelectField
                                options={options}
                                name={input.name}
                                onChange={ (value) => input.onChange(value)}
                            />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </>
                        )
                    }
                </Field>
            </div>
            <div className="name-input-box box">
                <Field name="name">
                    {({ input, meta }) => (
                        <>
                            <input {...input}
                                   type="text"
                                   placeholder="Enter your name"
                            />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </>
                    )}
                </Field>
            </div>
            <div className="submit-button-box box">
                <button type="submit">
                    { buttonType.toUpperCase() }
                </button>
            </div>
        </form>
    );
};

FormComponent.propTypes = {
    handleSubmit: func.isRequired,
    formOnChange: func.isRequired,
};

export default FormComponent;
