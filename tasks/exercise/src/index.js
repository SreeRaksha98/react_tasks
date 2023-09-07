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
// import JobAppComponent from "./components/exercise7_registrationFrom/App"
// import App from "./components/exercise8_useState_hook/app"
import App from "./components/exercise9_useEffect_hook/App"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);


reportWebVitals();
