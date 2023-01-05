import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import { CategoriesProvider } from './contexts/CategoriesContext'

import { store } from './store/store';
import { Provider } from 'react-redux';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CategoriesProvider>
          <App />
        </CategoriesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
