/**
 * Created by a1 on 2017/9/12.
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
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class ReactDemo extends Component {

    _rendTop=()=>{


        return (

            <View style={{
                flexDirection:'row',
                width:ScreenWidth,height:60,
                justifyContent:'space-between',backgroundColor:'white'}}>
                <View style={{flexDirection:'row'}}>

                    <Text
                        style={{color:'rgb(86,194,175)',
                            fontSize:30,marginLeft:15,
                            marginTop:10}}>¥31.8</Text>
                    <Text
                        style={{marginTop:22,
                            marginLeft:15,color:'rgb(150,150,150)'}}>门市价:¥31.8</Text>
                </View>

                <TouchableOpacity
                    style={{
                        width:100,
                        height:40,
                        backgroundColor:'rgb(244,158,49)',
                        alignItems:'center',
                        borderRadius:10,marginRight:15,marginTop:10}}
                >

                    <Text style={{lineHeight:35,color:'white'} }>立即抢购</Text>

                </TouchableOpacity>

            </View>

        )

    }
    _comSeparater = ()=> {

        return (
            <View style={{height: 1, backgroundColor: 'rgb(230,230,230)'}}/>
        );
    };
    _rendBottomView = ()=> {

        return (
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                padding:15,backgroundColor:'white'}}>

                <Text style={{color: 'rgb(116,142,80)'}}>随时退</Text>
                <Text style={{color: 'rgb(150,150,150)'}}>已售1234</Text>

            </View>
        );
    };
    _mayYouLike=()=>{

        return (

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                padding:15,
                marginTop:5,
                backgroundColor:'white'}}>

                <Text style={{color: 'rgb(50,50,50)'}}>看了本团的用户还看了</Text>


            </View>

        )


    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../Home/Header.png')}
                       style={{width:ScreenWidth,height:200}}/>

                {this._rendTop()}
                {this._comSeparater()}
                {this._rendBottomView()}
                {this._mayYouLike()}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(230,230,230)',
        flexDirection:'column',
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
module.exports=ReactDemo
