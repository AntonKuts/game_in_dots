import React from 'react';
import { Form } from 'react-final-form';
import FormComponent from './FormComponent';
import { func } from "prop-types";
import formValidate from '../helpers/formValidate';

const FormContainer =(props)=> {

    const { submitForm } = props;

    return (
        <Form
            onSubmit={submitForm}
            validate={formValidate}
            subscription={{ initialValues: true, values: true }}
            render={({ handleSubmit, form, values }) => (
                <FormComponent
                    formOnChange={form.change}
                    handleSubmit={handleSubmit}
                    formValues={values}
                />
            )}
        />
    );
};


FormComponent.propTypes = {
    submitForm: func.isRequired,
};

FormComponent.defaultProps = {
    submitForm: ()=>{},
};
export default FormContainer;
