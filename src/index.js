import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Elements } from '@stripe/react-stripe-js';

import App from './components/App';
import { stripePromise } from './utils/stripe';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </BrowserRouter>
  </Provider>
);


// TODO - Fix cart dropdown animation using keyframes
// TODO - Fix grid - products width bug
// TODO - Replace alerts with modal
// TODO - Confirmation modal on payment successful & navigate to shop
// TODO - Replace products data with JS Maps 
// TODO - Create git tag v1.0 -- JS Version
