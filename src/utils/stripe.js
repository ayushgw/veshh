import { loadStripe } from '@stripe/stripe-js';

const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
// console.log(publishableKey);

export const stripePromise = loadStripe(publishableKey);