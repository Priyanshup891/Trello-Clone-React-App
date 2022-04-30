import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import * as ReactDOMClient from 'react-dom/client';
import './assets/main.css';
import App from './App';
import './assets/tailwind.css';


ReactDOMClient.createRoot(document.getElementById('root')).render(
    
        <App />
    
);

