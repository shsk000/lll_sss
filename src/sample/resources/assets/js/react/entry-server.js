/* global context, dispatch */

import App from './app';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

// Compile an initial state
const { packages } = context;

const store = createStore(reducer);
// 検証用にwindowにstoreを公開しておく
global.STORE = store;

const html = ReactDOMServer.renderToString(
    <div id="app">
        <Provider store={store}>
            <StaticRouter location={context.url}>
                <App packages={packages} />
            </StaticRouter>
        </Provider>
    </div>
);

dispatch(html);
