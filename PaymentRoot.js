import React from 'react'
import Header from './Header'
import Payment from './Payment'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const promise = loadStripe('pk_test_51NLLRgSCID1t4gX78Prt5rBqVKrTSa3gz5xTbMe1SZp7pzqYB7L0mXw8Oxb0TFbkMqXVxYGALayWl9qLE8rvt2tM00ejI5mx32')

const PaymentRoot = () => {
  return (
    <>
    <Header/>
    <Elements stripe={promise}>
    <Payment/>
    </Elements>
  
  
    </>
  )
}

export default PaymentRoot