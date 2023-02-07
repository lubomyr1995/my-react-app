import React from 'react';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';

import './index.css';
import {App} from './App';
import setStore from "./redux/store";


const store = setStore()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
