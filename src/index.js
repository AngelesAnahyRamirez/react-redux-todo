import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./redux/reducers"



ReactDOM.render (
<Provider store = {createStore(reducers)}>

<App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

