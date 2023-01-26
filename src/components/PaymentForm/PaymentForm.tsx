import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { BUTTON_TYPES } from '../Button/Button';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearCart } from '../../features/cartSlice';
import { closeModal, openModal } from '../../features/modalSlice';

import { PaymentFormStyled, Form, PaymentButton, CardElementWrap } from './styles'

const PaymentForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const stripe = useStripe();
    const elements = useElements();
    const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
    const { cartTotal } = useAppSelector(store => store.cart);
    const { user } = useAppSelector(store => store.user);

    const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
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

        const cardElement = elements.getElement(CardElement);

        if(cardElement === null) return;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: cardElement,
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