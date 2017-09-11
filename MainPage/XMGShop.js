/**
 * Created by a1 on 2017/8/22.
 */
/**
 * Created by a1 on 2017/8/22.
 */
/**
 * Created by a1 on 2017/8/22.
 */
import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
export  default  class Mine extends React.Component {

    static  navigationOptions = {

        title:'我的'

    };
    render() {

        return (

            <View style={styles.container}>

                <Text style={styles.txt}>我的</Text>

            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'lightgray',
    },
    txt:{

        color:'red',
        fontSize:30
    }
});
const MineScense = StackNavigator({

   Home:{screen:Mine}

});
module.exports=MineScense;