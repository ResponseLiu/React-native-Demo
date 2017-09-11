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
export  default  class Book extends React.Component {

    static  navigationOptions = {

        title:'图书'
    };
    render() {

        return (

            <View style={styles.container}>

                <Text style={styles.txt}>书籍</Text>

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
const LikeBook = StackNavigator ({

    music:{screen:Book}

});
module.exports=LikeBook;