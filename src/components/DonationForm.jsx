import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


function DonationForm() {
  const [donationAmount, setDonationAmount] = useState(0); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error('Error creating payment method:', error);
      // Display error message to user
    } else {
      // Send paymentMethod.id and donationAmount to your server to complete the payment 
      console.log('Success!', paymentMethod, donationAmount);
    }
  };

  return (
    <div>
        <h1 className="mb-3 mt-1">Make a Donation</h1>
      <form onSubmit={handleSubmit} className="container mt-2 border border-dark mb-3 py-3 rounded"> 
      <div className="form-group pb-4">
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          className="form-control" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>

      <div className="form-group py-4">
        <label
 htmlFor="email">Email Address:</label>
        <input 
          type="email" 
          className="form-control" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>

      <div className="form-group py-4">

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input 
          type="tel" 
          className="form-control" 
          id="phoneNumber"
 
          value={phoneNumber} 
          onChange={(e) => setPhoneNumber(e.target.value)} 
        />
      </div>

      <div className="form-group py-4">
        <label htmlFor="amount">Donation Amount:</label>
        <input 
          type="number" 
          className="form-control" 
          id="amount" 
          value={donationAmount} 
          onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)} 
          min="1" 
          required 
        />
      </div>
        <div>
            <label className='mt-3' htmlFor='cardinformation'>Card Information:</label>
      <CardElement /> 
      </div>

      <button type="submit" disabled={!stripe}>Donate</button>
    </form>
    </div>
  );
}

export default DonationForm;