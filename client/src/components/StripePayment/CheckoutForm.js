import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
// import './Form.css';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        style={{
          background: 'linear-gradient(to bottom left, #3b1f46, #291d2d)',
          // border: 'solid #f6f9fc 1px',
          borderRadius: 'var(--radius)',
          padding: '20px',
          margin: '20px 0',
          boxShadow: '0 30px 50px -20px rgba(50, 50, 93, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3)',
          margin: '20px auto', // Center the form horizontally
        maxWidth: '400px', // Adjust the maximum width as needed
        }}
      >
        <PaymentElement id="payment-element" />
        <button
          disabled={isProcessing || !stripe || !elements}
          id="submit"
          style={{
            backgroundColor: 'var(--accent-color)',
            borderRadius: 'var(--radius)',
            color: 'white',
            border: '0',
            padding: '12px 16px',
            marginTop: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'block',
          }}
        >
          <span id="button-text">
            {isProcessing ? 'Processing ... ' : 'Pay now'}
          </span>
        </button>
        {message && (
          <div
            id="payment-message"
            style={{
              fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New"',
              display: 'none',
              /* ...other styles... */
            }}
          >
            {message}
          </div>
        )}
      </form>
   
  );
 }  