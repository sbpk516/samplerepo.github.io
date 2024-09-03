import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Greeting from './Greetings';
import reportWebVitals from './reportWebVitals';
// import MyComponent  from './ClassComp';
// import Greeting from './Greetings';
// import ShoppingCart from './props_tutorial';
// import RandomQuoteMachine from './RandomQuoteMachine';
// import Props1 from './testProps1';
// import Props1 from './testProps1';
import MarkdownPreviewer from './MarkdownPreviewer';
import DrumMachine from './DrumMachine'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MyComponent  />
    <p>Hello World</p>
    <Greeting />
    <ShoppingCart quantity={100000} /> */}
    {/* <RandomQuoteMachine />; */}
    {/* <MarkdownPreviewer /> */}
    <DrumMachine />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
