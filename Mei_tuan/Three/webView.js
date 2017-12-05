/**
 * Created by a1 on 2017/9/21.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

export default class webReact extends Component {

    static navigationOptions = ({ navigation }) => ({

        title: '网页',
        color:'white',
        headerStyle:{backgroundColor:'#06C1AE'},
    });

    render() {

        return (

            <WebView
                source={require('./index的副本.html')}
                startInLoadingState={true}
                domStorageEnabled={true}
                javaScriptEnabled={true} ></WebView>
        );

    }

}
