import Layout from "../components/Layout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);


const CheckoutForm = ({ success }) => {

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if (!error){
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post("/api/charge", {id, amount: 1099}); //pass object id
        console.log(data);
        success();
      } catch (error) {
        console.log(error);
      }

    }
  }

  return (
    <form onSubmit={handleSubmit} style={{maxWidth: '400px', margin: '0 auto'}}>
    <h2>Price: $10.99</h2>
    <CardElement />
    <button type="submit" disabled={!stripe}>
     Pay
     </button>
    </form>
  );
};

export default function Index() {
  const [status, setStatus] = React.useState("ready");

  if (status === "success"){
    return <div>congrats joe you fucking did it</div>;
  }


  return (
    <Layout>
      <p>Hello Next.js</p>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm
           success={()=> {
             setStatus("success");
           }}/>
        </Elements>
      </div>
    </Layout>
  );
}
