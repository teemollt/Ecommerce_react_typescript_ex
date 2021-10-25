import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
// BrowserRouter VS. HashRouter : Browswerrouter의 경우 라우팅을 리액트가 아니라 서버에게 요청할 수도 있어 위험(서버에서 서버 라우팅을 방지하는 api를 작성해둬야함)
// 해쉬라우팅은 url뒤에 #이 붙는데 # 뒤에 적는 것은 서버로 전달하지 않음 => 라우팅을 안전하게 할 수 있게함

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
