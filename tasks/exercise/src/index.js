import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import PhoneNumberComponent from './components/exercise_1/App';
// import StateChangeComponent from "./components/exercise2_changeStates/App";
// import App from "./components/exercise_3/App"
// import App from "./components/exercise_4/app"
// import App from "./components/exercise_5/App"
// import App from "./components/exercise_6/App"
import JobAppComponent from "./components/exercise7_registrationFrom/App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <JobAppComponent/>
  </React.StrictMode>
);


reportWebVitals();
