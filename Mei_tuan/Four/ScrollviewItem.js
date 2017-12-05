/**
 * Created by a1 on 2017/9/23.
 */
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
     static defaultProps={

         imageArra:Array,
         isscrollview:Boolean

     };

    componentDidMount(){

        var currentIndex = 0;
        var speed = 1;
        this._timer = setInterval(function () {

            this._scrollView.scrollResponderScrollTo({x:currentIndex*ScreenWidth,y:0,animated:true});

            currentIndex+=speed;

            if (currentIndex==3||currentIndex==0){

                speed=-speed;

            }

        }.bind(this),2000)

    }
    _rendImage(){

        var imageArra = this.props.imageArra;
        var itemArra = [];
        for (var i=0;i<imageArra.length;i++) {

            itemArra.push(

                <View key = {i}>

                    <Image  source={{uri:imageArra[i]}} style={{width:ScreenWidth,height:150}}/>

                </View>

            );
        }
        return itemArra;

    }
    render() {

        return (
            <View >

                <ScrollView
                    style={styles.frame}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    pagingEnabled={true}
                    bounces={false}
                    ref={(scrollView) => { this._scrollView = scrollView;}}
                    scrollEnabled={this.props.isscrollview}>

                    {this._rendImage()}


                </ScrollView>

            </View>
        );
    }
}
const styles = StyleSheet.create({

    frame:{

        width:ScreenWidth/3*2.3-10,
        backgroundColor:'white',
        height:120

    }
});

