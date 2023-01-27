import { loadStripe } from '@stripe/stripe-js';

function getEnvVar(v: string): string {
    const ret = process.env[v];
    if (ret === undefined) {
        throw new Error("process.env." + v + " is undefined!");
    }
    return ret;
}

const PUBLISHABLE_KEY: string = getEnvVar("REACT_APP_STRIPE_PUBLISHABLE_KEY");

export const stripePromise = loadStripe(PUBLISHABLE_KEY);