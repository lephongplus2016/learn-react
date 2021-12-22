import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './views/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // nôm na ta hiểu là
  // nó gọi 1 cái component là app, rồi nhúng component đó vào 1 cái thẻ div, mà thẻ div đó có id là root
  // rồi nó in thẻ div root đó ở index.html
  // keywork là inject 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
