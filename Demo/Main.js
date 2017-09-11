/**
 * Created by 20150324 on 2017/8/21.
 */

import  React,{Component} from 'react'
import TabNavigator from 'react-native-tab-navigator';
import {

    View,
    StyleSheet,
    Text,
    Image,
    Navigator,
    Dimensions

} from 'react-native';

import MoviePage from '../MainPage/XMGHome';
import MusicPage from '../MainPage/XMGMine';
import BookPage from '../MainPage/XMGMore';
import MyPage from '../MainPage/XMGShop';
var width= Dimensions.get('window').width;
export default  class MineTest extends  Component{
    constructor(props) {
        super(props);//这一句不能省略，照抄即可

        this.state={

            selectedTab:'电影',
            hideTabbar:false
        }
    }
    hideTabBar(){
        alert('1');
        this.setState({hideTabbar: true})
    };
    renderTabarItems(selectedTab,icon,selectedIcon,Component){
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={selectedTab}
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={icon} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={selectedIcon} />}
                onPress={() => this.setState({ selectedTab: selectedTab })}
            >
               <Component {...this.props}/>
            </TabNavigator.Item>
        )
    }
    render(){

        return (
            <View style={styles.container} >
                <TabNavigator tabBarStyle={this.state.hideTabbar?styles.hide:{}}>

                    {this.renderTabarItems('电影',require("./Image/待审核@3x的副本.png"),require("./Image/待审核1@3x的副本.png"),MoviePage)}
                    {this.renderTabarItems('音乐',require("./Image/签约@3x的副本.png"),require("./Image/签约1@3x的副本.png"),MusicPage)}
                    {this.renderTabarItems('图书',require("./Image/我的@3x的副本.png"),require("./Image/我的1@3x的副本.png"),BookPage)}
                    {this.renderTabarItems('我的',require("./Image/我的@3x的副本.png"),require("./Image/我的1@3x的副本.png"),MyPage)}

                </TabNavigator>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    tabText:{
        color:'#000000',
        fontSize:10
    },
    selectedTabText:{
        color:'blue'
    },
    icon:{
        width:20,
        height:20
    },
    hide: {
        transform: [
            {translateX:width}
        ]
    },
});
module.exports = MineTest;