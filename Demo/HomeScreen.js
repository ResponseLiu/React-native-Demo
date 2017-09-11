
import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet
} from 'react-native';
import ChatScreen from './ChatScreen'
import { StackNavigator } from 'react-navigation';

export  default  class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <Text style={styles.txt} onPress={()=>navigate('chat',{ user: '刘少闯' } )}>呵呵哒</Text>
            </View>
        );
    }
}
const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    chat: { screen: ChatScreen },
});
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
module.exports=SimpleApp;