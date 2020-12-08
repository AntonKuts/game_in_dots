import React from 'react';
import { Form } from 'react-final-form';
import FormComponent from './FormComponent';
import {object} from "prop-types";
import formValidate from './helpers/formValidate';

const FormContainer =()=> {

    const submitForm =(formValues)=> {
        console.log('submit values -- ', formValues);
    };

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
    formValues: object.isRequired,
};

export default FormContainer;
