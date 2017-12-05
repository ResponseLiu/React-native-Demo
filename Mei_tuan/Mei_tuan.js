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
    Image
} from 'react-native';
import {StackNavigator, TabNavigator} from "react-navigation";
import Home from './Home/Mei_Home'
import Order from './Order/Order'
import Next from './Home/NextPage'
import TabbarItem from './TabbarItem'
import hotSale from './Three/Three'
import realOrder from './Four/Four'
import  Root from '../ReduceTestIndex/Root'
import webview from '../Mei_tuan/Three/webView'
import happy from '../Mei_tuan/Three/webView'
const home = StackNavigator(

    {
        Home:{screen: Home},

    },{
        headerMode: 'none',
        navigationOptions: ({ navigation }) => ({
            tabBarLabel:'首页',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabbarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../Demo/tabbar的副本/pfb_tabbar_homepage@2x.png')}
                    selectedImage={require('../Demo/tabbar的副本/pfb_tabbar_homepage_selected@2x.png')}
                />
            )
        }),
    }
);
const three = StackNavigator(

    {
        hotSale:{screen:hotSale},

    },{
        headerMode: 'none',
        navigationOptions: ({ navigation }) => ({
            tabBarLabel:'附近',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabbarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../Demo/tabbar的副本/pfb_tabbar_homepage@2x.png')}
                    selectedImage={require('../Demo/tabbar的副本/pfb_tabbar_homepage_selected@2x.png')}
                />
            )
        }),
    }
)
const Four = StackNavigator(

    {
        realOrder:{screen:realOrder},

    },{
        headerMode: 'none',
        navigationOptions: ({ navigation }) => ({
            tabBarLabel:'订单',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabbarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../Demo/tabbar的副本/pfb_tabbar_discover@2x.png')}
                    selectedImage={require('../Demo/tabbar的副本/pfb_tabbar_discover_selected@2x.png')}
                />
            )
        }),
    }
);
const order = StackNavigator(

    {
        Order:{screen:Order},

    },{
        headerMode: 'none',
        navigationOptions: ({ navigation }) => ({
            tabBarLabel:'我的',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabbarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../Demo/tabbar的副本/pfb_tabbar_merchant@2x.png')}
                    selectedImage={require('../Demo/tabbar的副本/pfb_tabbar_merchant_selected@2x.png')}
    />
            )
        }),
    }
)
export const tabbar = TabNavigator({

    home:{screen:home},
    three:{screen:three},
    Four:{screen:Four},
    order:{screen:order},
});

export  const Navigator = StackNavigator(
    {
        Tab: {screen: tabbar},
        web :{screen:webview},
        Next:{screen:Next}

    },
    {
        navigationOptions: {
        headerStyle:{backgroundColor:'#06C1AE'},
        headerBackTitle: null,
            headerTintColor: 'white',
            showIcon: true,
    },
    }
);
export  const  Login = StackNavigator ({

    login:{screen:Root},
    Tab: {screen: Navigator},

},{

    headerMode:'none',
});
