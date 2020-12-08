import React from 'react';
import { Form } from 'react-final-form';
import FormComponent from './FormComponent';
// import { getStartData } from './startData';
import {func, object} from "prop-types";

const FormContainer =()=> {

    const submitForm =(formValues)=> {
        console.log('submit values -- ', formValues);
    };

    const formValidate =()=> {
        // validate here
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
