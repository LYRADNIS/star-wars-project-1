// Polyfill
import 'es6-promise/auto';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import './flexbox-grid.css';

// store
import store from './store';

// features
import Home from './features/Home';

// components
import Navbar from './components/Navbar';
import PageLoader from './components/PageLoader';
import Footer from './components/Footer';

render(
    <Provider store={ store }>
        <BrowserRouter>
            <main>
                <Navbar></Navbar>
                <Switch>
                    <PageLoader>
                        <Route exact path="/" component={ Home }></Route>
                    </PageLoader>
                </Switch>
                <Footer></Footer>
            </main>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
