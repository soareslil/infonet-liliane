import React, { useState } from 'react';
import Form from './form';
import User from "./user";

const FormValidation = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    };
    return (
        <div>
            {!formIsSubmitted ? <Form submitForm={submitForm}/> : <User />}
        </div>
    );

};

export default FormValidation;
