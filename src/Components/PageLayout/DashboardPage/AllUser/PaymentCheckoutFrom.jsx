import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const PaymentCheckoutFrom = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <CardElement
        className="border w-3/5 border-gray-200 px-5 py-2 mx-auto rounded-md mb-2"
        options={{
          style: {
            base: {
              fontSize: "12px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="w-1/5 mx-auto py-2 border-gray-200 border font-bold text-sm rounded-md bg-gray-100 hover:bg-yellow-100 font-Inter"
        type="submit"
      >
        Payment
      </button>
    </form>
  );
};


export default PaymentCheckoutFrom;
