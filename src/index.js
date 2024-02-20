import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './Contexts/ContextProvider'; // Fix the file path here
ReactDOM.render(
  
  <ContextProvider> <App /></ContextProvider>
  ,
  document.getElementById('root'),
);