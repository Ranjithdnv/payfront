import React, { useEffect } from 'react';


import axios from 'axios';
import { useState } from 'react';
import {Link} from  "react-router-dom"
function Home() {
  const [ss,setss]=useState("")
const displayRazorpay =async()=>{
  const  order= await axios.post("https://ranjirender.onrender.com/create",{amount:10000})
  console.log(order.data.id)
  var options = {
    "key": "rzp_test_6G6Yj3PsY2wyka", // Enter the Key ID generated from the Dashboard
    "amount": order.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "MOKA RANJITH KUMAR", //your business name
    "description": "Test Transaction gone waste",
    "image": "https://imgs.search.brave.com/8o53S6kB4bwahZFbdP188XLdkpPmvG4rOsX-i5NeUnU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDg4/NTcyNDQxL3Bob3Rv/L2hhbmQtb2YtZ29k/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0xZ1dEcmdsOFN5/WFR2RFJ3SVNHcU9P/MlZrbkJuTi1aOXB5/NXBKT3RzQ2FVPQ",
    "order_id": order.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://ranjirender.onrender.com/payment/success",
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
// var options = {
//   "key":  "rzp_test_6G6Yj3PsY2wyka", // Enter the Key ID generated from the Dashboard
//   "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//   "currency": "INR",
//   "name": "Acme Corp", //your business name
//   "description": "Test Transaction",
//   "image": "https://example.com/your_logo",
//   "order_id":  order.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//   "handler":  async function  (response){
//     console.log(response)
//     // response.redirect(
//     //   "http://localhost:5000/payment/success"
//     // );
//       alert(response.razorpay_payment_id);
//       alert(response.razorpay_order_id);
//       alert(response.razorpay_signature)
      
//       await axios.post("http://localhost:5000/payment/success")
      
      
//   },
//   "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
//       "name": "Gaurav Kumar", //your customer's name
//       "email": "gaurav.kumar@example.com", 
//       "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
//   },
//   "notes": {
//       "address": "Razorpay Corporate Office"
//   },
//   "theme": {
//       "color": "#3399cc"
//   }
// };
// var rzp1 = new Razorpay(options);
// var rzp1 = new window.Razorpay(options);
// rzp1.on('payment.failed', function (response){
//         alert(response.error.code);
//         alert(response.error.description);
//         alert(response.error.source);
//         alert(response.error.step);
//         alert(response.error.reason);
//         alert(response.error.metadata.order_id);
//         alert(response.error.metadata.payment_id);
// });
// document.getElementById('rzp-button1').onclick = function(e){
//     rzp1.open();
//     e.preventDefault();
// }
// rzp1.open()
    const paymentObject = new window.Razorpay(options);
    console.log(paymentObject)
    paymentObject.open();

  
  }

  return (
    <div className='App'>
      < div className='App-header'>
       
        <p>secure payments</p>
        <button className='App-link' onClick={displayRazorpay}>
          buy with us
        </button>
        <Link to ="/payment"style={{textDecoration:"none"}} >next page</Link>
        
      </div>
    </div>
  );
}

export default Home;
