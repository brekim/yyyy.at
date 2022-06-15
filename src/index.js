import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
/*
let React = require('react');
let ReactDOM = require('react-dom/client');
require('./index.css');
let App = require('./App.jsx');
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);