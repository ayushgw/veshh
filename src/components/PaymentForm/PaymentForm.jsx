import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { closeModal, openModal } from '../../features/modalSlice.ts';

import { BUTTON_TYPES } from '../Button/Button';
import { PaymentFormStyled, Form, PaymentButton, CardElementWrap } from './styles'
import { clearCart } from '../../features/cartSlice.ts';

const PaymentForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
                const content = new Map();
                content.set('text', 'Greetings! Your payment has been successfull.');
                content.set('buttonText', 'okay');
                content.set('buttonCallback', () => {
                    dispatch(clearCart());
                    dispatch(closeModal());
                    navigate('/shop');
                });
        
                const modalProps = { type: 'alert', content: content };
                dispatch(openModal(modalProps));
            }
        }
    }

    return (
        <PaymentFormStyled>
            <Form onSubmit={paymentHandler}>
                <h2>Credit Card Payment</h2>
                <CardElementWrap>
                    <CardElement />
                </CardElementWrap>
                <PaymentButton isLoading={isPaymentProcessing} buttonType={BUTTON_TYPES.base} className="nohover">Pay Now</PaymentButton>
            </Form>
        </PaymentFormStyled>
    )
}

export default PaymentForm