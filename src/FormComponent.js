import React, { useContext } from 'react';
import { Field } from 'react-final-form';
import {func} from 'prop-types';
import { gameSettingsContext } from './GameInDots';
import SelectField from './SelectField';
import getGameSettingsForSelect from './helpers/getGameSettingsForSelect';

const FormComponent =(props)=> {

    const { handleSubmit } = props;
    const gameSettings = useContext(gameSettingsContext);

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-body">
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
                <div className="name-input-box box">
                    <div className="box-title">Name</div>
                    <Field name="name">
                        {({ input, meta }) => (
                            <>
                                <input {...input} type="text" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </>
                        )}
                    </Field>
                </div>
                <div className="submit-button-box">
                    <button type="submit">
                        Play
                    </button>
                </div>
            </div>
        </form>
    );
};

FormComponent.propTypes = {
    handleSubmit: func.isRequired,
    // formValues: object.isRequired,
    formOnChange: func.isRequired,
};

export default FormComponent;