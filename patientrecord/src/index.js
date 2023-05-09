import React from 'react';
import ReactDOM from 'react-dom';
import 'govuk-frontend/govuk/all.scss';
import 'govuk-frontend/govuk/all.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

document.body.classList.add('js-enabled');
window.GOVUKFrontend.initAll();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

