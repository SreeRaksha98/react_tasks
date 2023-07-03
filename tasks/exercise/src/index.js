import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PhoneNumberComponent from './components/exercise_1/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PhoneNumberComponent/>
  </React.StrictMode>
);


reportWebVitals();
