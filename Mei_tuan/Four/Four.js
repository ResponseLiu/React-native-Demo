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
    View,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';
var ScreenWidth = Dimensions.get('window').width;
import api from '../api'
import  MineScrollView from  './ScrollviewItem'
export default class ReactDemo extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '订单',
        headerStyle:{backgroundColor:'#06C1AE'},
    })
    // 构造
      constructor(props) {
        super(props);
        // 初始状态

      }

    render() {

        return (
            <View >

                <MineScrollView isscrollview={false} imageArra={api.imageArra}>


                </MineScrollView>

            </View>
        );
    }
}
const styles = StyleSheet.create({

    frame:{


        width:ScreenWidth,
        backgroundColor:'white',

    }
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#F5FCFF',
    // },
    // welcome: {
    //     fontSize: 20,
    //     textAlign: 'center',
    //     margin: 10,
    // },
    // instructions: {
    //     textAlign: 'center',
    //     color: '#333333',
    //     marginBottom: 5,
    // },
});

