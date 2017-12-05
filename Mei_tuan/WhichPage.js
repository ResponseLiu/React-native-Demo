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
    Dimensions
} from 'react-native';
var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;
import {Navigator,Login} from '../Mei_tuan/Mei_tuan'
export default class ReactDemo extends Component {

    // 构造
      constructor(props) {
        super(props);
          // 初始状态
          //判断是否登录
        this.state = {

            loginStatus:3
        };
      }
      renderItem=()=>{

          return(this.state.loginStatus==3?<Login />:<Navigator />)

      };
    render() {
        return (

            <View style={styles.frame}>

                {this.renderItem()}

            </View>
        );
    }
}
const styles = StyleSheet.create({

    frame:{

        width:WIDTH,
        height:HEIGHT
    }
});