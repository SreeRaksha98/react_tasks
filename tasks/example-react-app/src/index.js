import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import StateHandling from './Component/StateHandling/App'
// import CounterTaskApp from "./Component/CounterTask/App"
import FormComponent1 from "./Component/formComponent1/App"
// import ExampleComponent from './Component/ExampleComponent';
// import ConditionalComponent from "./Component/ConditionalRender1/App"
// import ConditionalComponent2 from "./Component/ConditionalRender2/App"
// import FetchComponent from "./Component/FetchComponent/App"
// import FormComponent2 from './Component/formComponent/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CounterTaskApp /> */}
    {/* <ExampleComponent middleName={"mysore"}/> */}
    <FormComponent1 />
    {/* <StateHandling /> */}
    {/* <ConditionalComponent /> */}
    {/* <ConditionalComponent2 /> */}
    {/* <FetchComponent /> */}
    {/* <FormComponent2 /> */}
  </React.StrictMode>
);

reportWebVitals();
