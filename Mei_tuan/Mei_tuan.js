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

const  tabbar = TabNavigator({

    home:{screen: Home,

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
    },
    Three:{screen: hotSale,

        navigationOptions: ({ navigation }) => ({
            tabBarLabel:'热卖',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabbarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../Demo/tabbar的副本/pfb_tabbar_homepage@2x.png')}
                    selectedImage={require('../Demo/tabbar的副本/pfb_tabbar_homepage_selected@2x.png')}
                />
            )
        }),
    },
    Four:{screen:realOrder,

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
    },
    order:{screen:Order,

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
});
const Navigator = StackNavigator(
    {
        Tab: { screen: tabbar},
        Next:{ screen:Next}

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
export default Navigator



