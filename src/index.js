import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
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

// TODO : clean up mobile css, add breakpoints
// useful link : https://dev.to/cagatayunal/how-to-use-css-media-query-breakpoint-in-styled-components-9of