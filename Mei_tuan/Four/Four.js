/**
 * Created by a1 on 2017/9/4.
 */
/**
 * Created by a1 on 2017/9/4.
 */
/**
 * Created by a1 on 2017/9/4.
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
    View
} from 'react-native';

export default class ReactDemo extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '订单',
        headerStyle: { backgroundColor: 'white' },
    })

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    order!
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

