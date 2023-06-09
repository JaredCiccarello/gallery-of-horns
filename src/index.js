// index.js is not a class unlike App.js

import React from 'react';
import ReactDOM from 'react-dom/client';
// MUST import bootstrap CSS in order for bootstrap style. We put this infront of index.css because CSS will do the last thing we told it to do.
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
