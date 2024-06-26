import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import ChatSlice from './redux/ChatSlice';
let store = configureStore({
  reducer : ChatSlice
})

const root = ReactDOM.hydrateRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);
