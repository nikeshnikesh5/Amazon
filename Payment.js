import React ,{useEffect, useState}from 'react'
import './payment.css';
import { useStateValue } from './StateProvider';
import { Link,  } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const Payment = () => {

    const [{basket,user},dispatch] = useStateValue();
    const [processing,setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState("");
    const [error,setError] = useState(null);
    const [disabled,setDisabled]=useState(null);
    const [clientSecret, setClientSecret] = useState("");
    
    const stripe = useStripe();
    const element = useElements();
    const navigate = useNavigate();
  

    useEffect(()=>{
   // generate the special stripe which allow us to charge a customer
   const getClientSecret = async () => {
       const response = await axios({
        method:'post',
        // Stripe expect the total in a current subunits//

        url:`/payments/create?total=${getBasketTotal(basket)* 100}`
       });
   setClientSecret(response.data.clientSecret);
   
}
  getClientSecret();
    },[basket])

    console.log('thhrr',clientSecret)
   

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing();

        const payload = await stripe.confirmCardPayment(clientSecret,{
          payment_method: {
              card: element.getElement(CardElement)
          }
        }).then(({paymentIntent})=>{
            setSucceeded(true);
            setError(null)
            setProcessing(false)
            navigate('/order')
          })
    
    }












    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message:"");
    }
   


  return (
    <div className='payment'>

<h1>Checkout{<Link className='LinkCheck' to="/checkout">({basket?.length} )items </Link>}</h1>
    <div className='payment__container'>
        {/*Payment section - delevery address */}
        <div className='payment__section'>
          <div className='payment__title'>
           <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 , Test</p>
            <p>321Test 432</p>

          </div>
        </div>
 {/*Payment section - Review Items */}
        <div className='payment__section'>
        <h3>Review Item and delevery</h3>
    <div className='payment__items'>
        {basket.map(item => (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}

            />
        ))}
    </div>
        </div>

        <div className='payment__section'>
    <div className='payment__title'>
        <h3>Payment Method</h3>
    </div>
    <div className='payment__details'>

 <form onSubmit={handleSubmit}>
    <CardElement onChange={handleChange}/>
   <div className='payment__priceContainer'>
   <CurrencyFormat
  renderText={(value) => (
    <>
    <p>
        SubTotal ({basket.length} items): <strong>{value}</strong>
    </p>
 
    </>
  )}
  decimalScale={2}
  value={getBasketTotal(basket)}
  displayType={"text"}
  thousandSeparator={true}
  prefix={'$'}
  
  />
<button disabled={processing || disabled || succeeded}>
    <span>{processing ? <p>Processing</p>:"Buy Now"}</span>
</button>

   </div>
   {error && <div>{error}</div>}
 </form>
    </div>

        </div>
    </div>


    </div>
  )
}

export default Payment