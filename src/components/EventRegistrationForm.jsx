import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import './Form.css';

const EventRegistrationForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: 'No',
    guestName: '',
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/summary', { state: { ...values } });
  };

  return (
    <div className='topDiv'>
      <h1 className='simpleForm'>Simple Validation Form </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={values.name} onChange={handleChange} />
            {errors.name && <p>{errors.name}</p>}
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={values.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
          </label>
        </div>
        <div>
          <label>
            Age:
            <input type="number" name="age" value={values.age} onChange={handleChange} />
            {errors.age && <p>{errors.age}</p>}
          </label>
        </div>
        <div>
          <label>
            Are you attending with a guest?
            <select name="attendingWithGuest" value={values.attendingWithGuest} onChange={handleChange}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </label>
        </div>
        {values.attendingWithGuest === 'Yes' && (
          <div>
            <label>
              Guest Name:
              <input type="text" name="guestName" value={values.guestName} onChange={handleChange} />
              {errors.guestName && <p>{errors.guestName}</p>}
            </label>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventRegistrationForm;
