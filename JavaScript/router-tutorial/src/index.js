import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Invoices from './routes/invoices';
import Expenses from './routes/expenses';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App />}/>
      <Route path="/expenses" element={ <Expenses />}/>
      <Route path="/invoices" element={ <Invoices />}/>


    </Routes>
    </BrowserRouter>

);

