/**
 * Created by a1 on 2017/9/4.
 */
import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    Dimensions,
    DeviceEventEmitter
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Cell from '../Cell'
import api from '../api'
import Header from '../Home/NextHeader'
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

export  default class ChatScreen extends React.Component {
    static navigationOptions = ({navigation})=>({
        title: '团购详情',
        // headerLeft: (
        //     <Text onPress={() => {
        //
        //         DeviceEventEmitter.emit("back","呵呵哒");
        //         navigation.goBack()
        //
        //
        //         }}
        //     >点击</Text>
        // ),

        headerStyle:{backgroundColor:'#06C1AE'},

    });
// 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {

        data:api.detailData

    };
  }
    _comSeparater = ()=> {

        return (

            <View style={{height: 1, backgroundColor: 'rgb(230,230,230)'}}/>
        );
    };
    _renderItem=({item,index})=>{

        return (

            <View>
                <Cell text={item.value.name}
                      detail={item.value.detail}
                      price={item.value.price}
                      url={item.value.squareimgurl}/>
            </View>
        );
    };
    renderHeader=()=>{
        return(

            <View>
                <Header/>
            </View>
        )
    }
    render() {

        return (
            <View>
                <FlatList
                    data={this.state.data}
                    style={{
                        backgroundColor: 'rgba(240,240,240,1)',
                        width:ScreenWidth,
                        height:ScreenHeight-64}}
                    ItemSeparatorComponent={this._comSeparater}
                    keyExtractor={this.keyExtractor}
                    renderItem={this._renderItem}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={this.renderHeader}
                />
            </View>
        );
    }
}