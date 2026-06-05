import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MyStateProvider } from './contexto/mystore';
import {myInitialState} from './contexto/myInitialState';
import { mainReducer } from './contexto/reducers';

ReactDOM.render(
  <React.StrictMode>
    <MyStateProvider initialStateParam={myInitialState} reducerParam={mainReducer}>
      <App />
    </MyStateProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals