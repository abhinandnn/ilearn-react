import React from 'react'
import './wallet.css'
import { toast } from 'react-toastify';
import { useState } from 'react';
import {useAuth} from '../utils/AuthContext'
import axios from '../../api/axios';
import useRazorpay from 'react-razorpay';
function Wallet() {
const config = { headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, withCredentials: false }


const [errorName, setErrorName] = useState("");
const [amount,setAmount]=useState();
const {user,logout,reload}= useAuth();
const [Razorpay] = useRazorpay();

    const handleChange = (e) => {
        const { name,value} = e.target;
        let errorMessage = "";
        if (name === "amount") {
        console.log(value)
        setAmount(value);
        if (!parseFloat(value)>0) {
            errorMessage = "Enter an amount greater than zero";
        }
        setErrorName(errorMessage);
    }
      };
      const getRazorpayOptions = async (key1) => {
        return {
          key: key1.key_id,
          amount: key1.order.amount,
          currency: "INR",
          name: "iLearn",
          description: "Online Course",
          image: '',
          order_id: key1.order_id,
          handler: function (response) {
            console.log("response", response);
            console.log();
            checkPaymentStatus(
              response.razorpay_order_id,
              response.razorpay_payment_id,
              response.razorpay_signature,
            )
              .then((result) => {
                console.log("Payment Status:", result);
              })
              .catch((error) => {
                console.error("Error checking payment status:", error);
              });
          },
          prefill: {
            name: user.name,
            email: user.email,
          },
          notes: {
            address: "iLearn Pvt.",
          },
          theme: {
            color: "#5928E6",
          },
        };
      }
      const checkPaymentStatus = async (
        order_id,
        payment_id,
        signature
      ) => {
        try {
          const response = await axios.post(
            `/checkPayment/${amount}`,
            { order_id, payment_id, signature},
            config
          );
          toast.success('Payment successful');
          reload();
          return response.data;
        } catch (error) {
          console.error("Error checking payment status:", error);
        }
      };
      const handleSubmit = async(e) => {
        e.preventDefault();
        let hasErrors = true;
        if(!(errorName))
        {hasErrors=false}
    
        if (!hasErrors) {
        console.log("Form submitted:");
      
        let key1;
        try {
          const response = await axios.post(
            `createOrder/${amount}`,null,
            config
          );
          console.log(response.data);
          key1=response.data;
        } catch (error) {
          console.error("Error creating order:", error.response.data);
          return null;
        }
      const options = await getRazorpayOptions(key1);
        const rzp1 = new Razorpay(options);
        console.log(rzp1);
        rzp1.on("payment.failed", function (response) {
          console.log(response.error);})
          rzp1.open();}
          
        
        }
  return (
    <div>
      <div className='cartPage'>
      <div className='cartBanner'>
        Your Wallet
      </div>
      <div className='walletSec'>
        <div className='walletAmt'>
            Present amount
            <span style={{fontSize:'2.8rem',color:'black'}}>₹{user&&user.wallet}</span>
        </div>
        <div className='walletRec'>
        <form onSubmit={handleSubmit}>
            <div className="form" id="formProfile">
                <div className="input-signup-name" id="inputProfileName">
                <input
                    type="number"
                    name="amount"
                    maxLength={50}
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={handleChange}
                    style={{
                    border: errorName ? "2px solid red" : "2px solid black",
                    }}
                    required
                />
                <label className={errorName ? "error-label" : ""}>Enter Amount</label>
                <span className="error-message">{errorName}</span>
                </div>
                <button className='logButton' id="profileButton" disabled={errorName}>
        {errorName? (<svg className='sv' width="40"viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="45"/>
</svg>)
  :("Recharge")}</button>
                </div>
                </form>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Wallet