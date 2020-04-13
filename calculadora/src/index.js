import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <h1>Calculadora</h1>
    <h2>Mutcho loka</h2>
    <Calculator/>
  </div>
, document.getElementById('root')); 
serviceWorker.register();
