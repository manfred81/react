import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const currentName = 'Ivan';


ReactDOM.render(
  <React.StrictMode>
   
    <App name ={currentName} topPosition='5px' showRed />
  </React.StrictMode>,
  document.getElementById('root')
);


