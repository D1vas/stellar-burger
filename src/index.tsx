import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/app/app';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './services/store/store';
=======
>>>>>>> a54ca2fff2f821f840d691e8e4ed242be00ad31e

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
=======
    <App />
>>>>>>> a54ca2fff2f821f840d691e8e4ed242be00ad31e
  </React.StrictMode>
);
