import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";

import {store, persistor} from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App/>
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
