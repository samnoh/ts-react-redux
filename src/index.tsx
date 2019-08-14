import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components';
import { Router } from './router';
import { store } from './configureStore';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Router />
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
