import { useState } from 'react';

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const validate = (values) => {
        const errors = {};
        if (!values.name) errors.name = 'Name is required';
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!values.age) {
            errors.age = 'Age is required';
        } else if (isNaN(values.age) || values.age <= 0) {
            errors.age = 'Age must be a number greater than 0';
        }
        if (values.attendingWithGuest === 'Yes' && !values.guestName) {
            errors.guestName = 'Guest name is required';
        }
        return errors;
    };

    const handleSubmit = (callback) => (e) => {
        e.preventDefault();
        const validationErrors = validate(values);
        if (Object.keys(validationErrors).length === 0) {
            callback();
        } else {
            setErrors(validationErrors);
        }
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
    };
};

export default useForm;
