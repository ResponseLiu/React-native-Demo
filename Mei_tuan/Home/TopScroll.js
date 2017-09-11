/**
 * Created by a1 on 2017/9/11.
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
    ScrollView,
    Dimensions,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import api from '../api'
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class ReactDemo extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {

            data:api.data

        };
      }
    _renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
            >
            <View style={{

                backgroundColor:'white' ,
                width:ScreenWidth/4,
                height:80,
                paddingTop:10,
                alignItems:'center',

            }}>

                <Image
                    source={item.value.icon}
                    style= {styles.pict}/>
                <Text style={styles.item}>{item.value.name}</Text>

            </View>
            </TouchableOpacity>
        );
    };
    renderScrollItemView(){

        var itemArr = [];
        var  colorArr = ['red','green'];

        for(var i = 0;i<colorArr.length;i++){

            var itemData = this.state.data[i];

            itemArr.push(

                <View key = {i} style={[{
                    backgroundColor:colorArr[i],
                    width:ScreenWidth
                    },styles.container]}>

                    <FlatList
                        data={itemData}
                        style={{backgroundColor: 'rgba(240,240,240,1)'}}
                        renderItem={this._renderItem}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.list}//设置cell的样式
                        pageSize={4}
                        scrollEnabled={false}
                    />

                </View>

            );
        }
        return itemArr;
    }
    render() {

        return (
            <View style={styles.container}>

               <ScrollView
                   style={{backgroundColor:'white', width:ScreenWidth,flexDirection: 'row',paddingBottom:10,paddingTop:10}  }
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                   pagingEnabled={true}>

                   {this.renderScrollItemView()}

               </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flexDirection: 'row',//设置横向布局

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
    list: {

        flexDirection: 'row',//设置横向布局
        flexWrap: 'wrap',  //设置换行显示
        backgroundColor: 'rgba(240,240,240,1)',
    },
    item: {

        fontSize: 14,
        height: 20,
        marginTop:10,
        textAlign:'center',
        color:'orange'
    },
    pict:{

        width:40,
        height:40,
        borderRadius:20,


    },
});

AppRegistry.registerComponent('ReactDemo', () => ReactDemo);
