import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { BUTTON_TYPES } from '../Button/Button';

import { PaymentFormStyled, Form, PaymentButton, CardElementWrap } from './styles'

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
    const { cartTotal } = useSelector(store => store.cart);
    const { user } = useSelector(store => store.user);

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setIsPaymentProcessing(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: cartTotal * 100 }),
        }).then((res) => res.json());

        const { paymentIntent: { client_secret } } = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: user ? user.displayName : 'Guest'
                }
            }
        });

        setIsPaymentProcessing(false);

        if (paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful');
            }
        }
    }

    return (
        <PaymentFormStyled>
            <Form onSubmit={paymentHandler}>
                <h2>Credit Card Payment</h2>
                <CardElementWrap style={{ margin: '1rem 0' }}>
                    <CardElement />
                </CardElementWrap>
                <PaymentButton isLoading={isPaymentProcessing} buttonType={BUTTON_TYPES.base} className="nohover">Pay Now</PaymentButton>
            </Form>
        </PaymentFormStyled>
    )
}

export default PaymentForm