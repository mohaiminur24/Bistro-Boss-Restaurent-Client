import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  useElements,
  useStripe,
  CardElement,
  Elements,
} from "@stripe/react-stripe-js";


const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const PaymentLayout = () => {
  

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
      <div className="w-full">
        <h1 className="text-3xl font-Inter uppercase text-center mb-5">Payment</h1>
        <div className="text-center w-full">

          <Elements stripe={stripePromise}>
            <form className="w-full" >
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
              <button className="w-1/5 mx-auto py-2 border-gray-200 border font-bold text-sm rounded-md bg-gray-100 hover:bg-yellow-100 font-Inter" type="submit" >
                Payment
              </button>
            </form>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentLayout;
