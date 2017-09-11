/**
 * Created by a1 on 2017/9/6.
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
    Image
} from 'react-native';
export default class Cell extends Component {

    render() {
        const {imageUrl} = {
            url:this.props.url


        };
        return (
            <View style={styles.container}>

                <View>
                    <Image source={{url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505699516&di=ee555632fe0d42ef2aa18c916be36c07&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.nipic.com%2F2007-07-03%2F200773225249910_2.jpg'}}
                           style={{width:70,height:70}}/>
                </View>

                <View style={styles.text}>

                    <View>
                        <Text style={{fontSize:18}}>{this.props.text}</Text>
                        <Text style={{marginTop:5,fontSize:15,color:'rgb(150,150,150)'}}>{this.props.detail}</Text>
                    </View>
                    <View style={styles.textBottom}>
                        <Text style={styles.price}>{this.props.price}元</Text>
                    </View>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'white',
        flexDirection:'row',
        padding:10
    },
    text: {

        flexDirection:'column',
        justifyContent:'space-between',
        marginLeft:15,
        marginTop:7,

    },
    textBottom: {


       marginBottom:5

    },
    price: {


        color:'red',
        fontSize:16

    },

});
module.exports=Cell
