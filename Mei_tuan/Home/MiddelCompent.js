/**
 * Created by a1 on 2017/9/11.
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
    Dimensions,
    Image
} from 'react-native';
var ScreenWidth = Dimensions.get('window').width;
export default class ReactDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
               <Image
                   source={require('../Home/timg.jpg')}
                   style={{width:ScreenWidth, height:100}}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop:5,
        paddingBottom:5
    },

});
AppRegistry.registerComponent('ReactDemo', () => ReactDemo);
