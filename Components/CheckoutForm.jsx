import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import BillingDetailsFields from "./BillingDetailsFields";


function CheckoutForm(props) {
    const [isProcessing, setProcessingTo] = React.useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();


    const billingDetails = {
      name: event.target.name.value,
      email: event.target.email.value,
      address: {
        city: event.target.city.value,
        line1: event.target.address.value,
        state: event.target.state.value,
        postal_code: event.target.zip.value
      }
    };



setProcessingTo(true);



    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: billingDetails,
    });

    if (!error){
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post("/api/charge", {
          id,
          amount: props.price*100,
          item_id: props.id
        }); //pass object id
        console.log(data);
        success();
        setProcessingTo(false);
      } catch (error) {
        console.log(error);
        setProcessingTo(false);
      }

    }
  }


  const cardElementOpts = {
    hidePostalCode: true
  };

  return (
    <form onSubmit={handleSubmit} style={{maxWidth: '400px', margin: '0 auto'}}>
    <BillingDetailsFields />
    <CardElement options={cardElementOpts} />
    <button type="submit" disabled={isProcessing || !stripe}>
     {isProcessing ? "Processing..." : "Pay $10"}
     </button>
    </form>
  );
};

export default CheckoutForm;
