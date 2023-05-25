import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import Footer from "../Footer";


function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/api/config").then(async (r) => {
      console.log(r);
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);

//   const StyledPage = styled.div`
//   background: linear-gradient(to bottom left, #5228F5, #392B43);
// `;


  return (
    <>
    <div
      className="background-box"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom left, #5228F5, #392B43)',
        zIndex: -1,
      }}
      ></div>
     
      
    
     <h1 style={{ margin: '20px auto', textAlign: 'center', fontSize: '36px', fontWeight: 'bold' }}>✨ Analysis Feature Subscription ✨</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
      {/* <Footer/> */}
      
      
    </>
  );
}

export default Payment;