import React from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button, { BUTTON_TYPES } from '../Button/Button';

import { PaymentFormStyled, Form } from './styles'

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();
        
        if(!stripe || !elements) return;

        
    }
    
    return (
        <PaymentFormStyled>
            <Form>
                <h2>Credit Card Payment</h2>
                <CardElement />
                <Button buttonType={BUTTON_TYPES.inverted}>Pay Now</Button>
            </Form>
        </PaymentFormStyled>
    )
}

export default PaymentForm