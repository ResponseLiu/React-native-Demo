/**
 * Created by a1 on 2017/8/26.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
 import {connect} from 'react-redux';
 import {doLogin} from '../Actions/LoginAction'

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

 class NextPage extends Component {

    render() {

        let  tips;

        if (this.props.status === 'init') {

             tips = '点击登录';
        }
        else if (this.props.status === 'doing') {
            tips = '正在登录...';
        }
        else if (this.props.status === 'done' && !this.props.isSuccess) {
            tips = '登录失败, 请重新登录';
        }
        else if (this.props.status ==='done' && this.props.isSuccess){

            tips = '登录成功!'
        }
        return (

            <View style={styles.container} >

                <Text style={styles.text}>Welcome</Text>

                <View style={styles.InputView}>

                </View>

                <View style={styles.SecureInputView}>

                </View>

                <TouchableOpacity style={styles.login} onPress={this.handleLogin.bind(this)}>

                    <Text style={styles.loginText}>{tips}</Text>

                </TouchableOpacity>

            </View>
        );
    }

     handleLogin()
     {


         this.props.dispatch(doLogin());

     }
}

function select(store)
{
    return {
        status: store.loginIn.status,
    isSuccess: store.loginIn.isSuccess,
    user: store.loginIn.user
    }
}

var styles = StyleSheet.create({
    container: {

        backgroundColor:'blue',
        width:ScreenWidth,
        height:ScreenHeight

    },
    text: {
        fontSize: 35,
        color: 'white',
        marginTop:100,
        textAlign:'center'
    },
    InputView:{

        backgroundColor:'white',
        width:ScreenWidth-100,
        height:50,
        marginTop:100,
        marginLeft:50,
        borderRadius:25,

      },
    SecureInputView:{

        backgroundColor:'white',
        width:ScreenWidth-100,
        height:50,
        marginTop:20,
        marginLeft:50,
        borderRadius:25,

    },
    login:{

        backgroundColor:'white',
        width:ScreenWidth-100,
        height:50,
        marginTop:70,
        marginLeft:50,
        borderRadius:25,
        backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

    },
    loginText:{

        fontSize:18,
        color:'white'

    }
});
export default connect(select)(NextPage);