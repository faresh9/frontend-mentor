// CreditCardForm.jsx
import React, { useState } from 'react';
import Card from './Card'; // Assuming you have a Card component to display the images

const CreditCardForm = () => {
  const [formData, setFormData] = useState({
    cardHolderName: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex">
      <Card details={formData} />
      <form className="p-4">
        {/* Form fields go here */}
        <label htmlFor="cardHolderName">Card Holder Name:</label>
        <input type="text" id="cardHolderName" name="cardHolderName" value={formData.cardHolderName} onChange={handleChange} required />

        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />

        <label htmlFor="expirationDate">Expiration Date:</label>
        <input type="text" id="expirationDate" name="expirationDate" value={formData.expirationDate} onChange={handleChange} required />

        <label htmlFor="cvc">CVC:</label>
        <input type="text" id="cvc" name="cvc" value={formData.cvc} onChange={handleChange} required />

        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreditCardForm;
