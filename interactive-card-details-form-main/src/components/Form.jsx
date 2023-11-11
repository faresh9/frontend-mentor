import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    // Define your form fields here
    name: '',
    email: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the parent component for further processing
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      {/* Form fields go here */}
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

      {/* Add more form fields as needed */}
      
      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
}

export default Form;
