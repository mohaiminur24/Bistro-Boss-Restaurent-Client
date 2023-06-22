import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements
} from "@stripe/react-stripe-js";
import PaymentCheckoutFrom from "./PaymentCheckoutFrom";

const stripePromise = loadStripe(`${import.meta.env.VITE_Strip_key}`);

const PaymentLayout = () => {
    

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
      <div className="w-full">
        <h1 className="text-3xl font-Inter uppercase text-center mb-5">
          Payment
        </h1>
        <div className="text-center w-full">
          <Elements stripe={stripePromise}>
            <PaymentCheckoutFrom/>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentLayout;
