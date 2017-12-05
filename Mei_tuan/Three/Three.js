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
    View
} from 'react-native';
import  ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view'
import Happy from '../Three/Happy'

export default class ReactDemo extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '附近',
        headerStyle:{backgroundColor:'#06C1AE'},
    });
// 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }
    componentDidMount() {


    }
    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => <DefaultTabBar />}
                tabBarUnderlineStyle={styles.line}
                tabBarBackgroundColor='#FFFFFF'
                tabBarActiveTextColor='#06C1AE'
                tabBarInactiveTextColor='black'
                tabBarTextStyle={{fontSize: 16}}
                scrollWithoutAnimation={true}


               >
                <Happy tabLabel = '享美食' navigation={this.props.navigation}></Happy>
                <Happy tabLabel = '住酒店' navigation={this.props.navigation}></Happy>
                <Happy tabLabel = '爱玩乐' navigation={this.props.navigation}></Happy>
                <Happy tabLabel = '全部'   navigation={this.props.navigation}></Happy>


            </ScrollableTabView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
    line:{

        backgroundColor:'#06C1AE',
        height:3


    },
    textStyle: {
        flex: 1,
        fontSize:20,
        marginTop:20,
        textAlign:'center',
    },
});
