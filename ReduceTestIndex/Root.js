/**
 * Created by a1 on 2017/8/26.
 */
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from '../Store/store';
import App from './App';

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}