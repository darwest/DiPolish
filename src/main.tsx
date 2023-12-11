import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Modal from 'react-modal';
//налаштування кореневого елементу для компонента Modal.
Modal.setAppElement('#root');
//<React.StrictMode> - обгортка для включення Strict Mode у React. 
//Strict Mode надає додаткові перевірки та попередження під час розробки.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);