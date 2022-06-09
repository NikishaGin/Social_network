import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {State} from "./Redax/State";


ReactDOM.render(<App state={State} /*dialogs={dialogs} message={message}*//>,
  document.getElementById('root')
);