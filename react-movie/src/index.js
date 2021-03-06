import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import './css/app.scss';
import './css/style.scss';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


ReactDOM.render(
<div>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    <Router/>
</div>
, document.getElementById('root'));
