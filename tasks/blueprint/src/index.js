// We are not touching anything in this file

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

//importing app.js file with path
import App from './Components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
