/**
 * Created by a1 on 2017/9/14.
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
    FlatList,
    TouchableOpacity,
    Dimensions

} from 'react-native';
import Next from '../Home/NextPage'
import { StackNavigator } from 'react-navigation';
import FetchUtil  from  '../Home/FetchUtil'
import Cell from '../Cell'
import api from '../api'
const {width, height} = Dimensions.get('window')
export default class ReactDemo extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

            data: [],
            refreshing: false,
            keydata: api.keydata,
            index: 0
        };
    }

    componentDidMount() {

        this.fetchData()
    }

    fetchData() {

        let fetchtil = new FetchUtil()
        fetchtil.getUrl(api.recommend).then((responseData)=> {
            let data = responseData.data;
            let dataBlob = [];
            let i = 0;
            data.map(function (item) {
                dataBlob.push({
                    key: i,
                    value: item,
                });
                i++;
            });
            this.setState({

                data: dataBlob,
                refreshing: false

            });
            data = null;
            dataBlob = null;

        }).catch((error)=> {

        }).done();
    }

    _comSeparater = ()=> {

        return (
            <View style={{height: 1, backgroundColor: 'rgb(230,230,230)'}}/>
        );
    };
    webClick = (item, index)=> {

        const {navigate} = this.props.navigation;
        navigate('Next');
    };
    _renderItem = ({item, index})=> {

        return (
            <View >
                <TouchableOpacity onPress={this.webClick.bind(this)}>
                    <Cell text={item.value.mname}
                          detail={item.value.title}
                          price={item.value.price}
                          url={item.value.squareimgurl}/>
                </TouchableOpacity>

            </View>
        );
    };
    selectHeader = ()=> {

        return (

            <View style={{width: width, height: 105, backgroundColor: 'red'}}>

                <FlatList
                    removeClippedSubviews={false}
                    data={this.state.keydata}
                    style={{backgroundColor: 'white'}}
                    renderItem={this.renderItemAnother}
                    contentContainerStyle={styles.list}
                    pageSize={4}
                />
            </View>
        )
    };
    renderItemAnother = ({item, index})=> {

        return (
            <View style={{width: width / 4, paddingTop: 12}}>

                <TouchableOpacity style={{
                    width: width / 4 - 20,
                    height: 35,
                    marginLeft: 10,
                    backgroundColor: this.state.index === index ? 'red' : 'white',
                    borderRadius: 15,
                    padding: 10
                }} onPress={this.chonse.bind(this, item, index)}>

                    <Text style={{
                        textAlign: 'center',
                        lineHeight: 14,
                        fontSize: 13,
                        color: this.state.index === index ? 'white' : 'rgb(100,100,100)'
                    }}>{item.value.text}</Text>

                </TouchableOpacity>

            </View>
        );
    };
    chonse = (item, index)=> {

        this.setState({

            index: index
        })
    };

    render() {

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    removeClippedSubviews={false}
                    style={{backgroundColor: 'white'}}
                    ItemSeparatorComponent={this._comSeparater}
                    keyExtractor={this.keyExtractor}
                    renderItem={this._renderItem.bind(this)}
                    refreshing={this.state.refreshing}
                    ListHeaderComponent={this.selectHeader}
                    onRefresh={()=> {

                        this.fetchData()

                    }}
                />
            </View>
        );
    }
}
    const styles = StyleSheet.create({
        container: {

            backgroundColor: 'white',
        },
        list:{
            flexDirection: 'row',//设置横向布局
            flexWrap: 'wrap',  //设置换行显示
            backgroundColor: 'rgba(240,240,240,1)',
            paddingBottom:12
        }
    });