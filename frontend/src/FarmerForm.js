import React from 'react';
import { useForm } from 'react-hook-form';
import api from './api';


function FarmerForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    // Make API call to create a new farmer
    try {
        const response = await api.post('/farmers', data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input type="text" {...register('name')} />
        {errors.name && <div>{errors.name.message}</div>}
      </label>
      <label>
        Email:
        <input type="email" {...register('email')} />
        {errors.email && <div>{errors.email.message}</div>}
      </label>
      <button type="submit">Create Farmer</button>
    </form>
  );
}

export default FarmerForm;