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
    TouchableOpacity,
    FlatList
} from 'react-native';
import api from  '../api'
import Cell from '../Cell'
import TopScroll from '../Home/TopScroll'
import Middle from '../Home/MiddelCompent'
export default class ReactDemo extends Component {

    static navigationOptions = ({ navigation }) => ({

        title: '首页',
        color:'white',
        headerStyle: { backgroundColor: 'white' },
    });
// 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {

        data:[],
        refreshing:false

    };
  }
    fetchData() {

        fetch(api.recommend)
            .then((response) => response.json())
            .then((responseData) => {
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
                    refreshing:false

                });
                data = null;
                dataBlob = null;
            })
            .catch((error) => {
                alert(error)
            })
            .done();
    }
    componentDidMount() {

        this.fetchData();
    }
    itemClick(item, index) {


        alert('alert')
          // const { navigate } = this.props.navigation;
          // navigate('Next',{ user: 'test' } );

    }
    _comSeparater = ()=> {

        return (
            <View style={{height: 1, backgroundColor: 'rgb(230,230,230)'}}/>
        );
    };

    _renderItem=({item,index})=>{

        return (


                <View>
                    <TouchableOpacity onPress={this.itemClick}>
                    <Cell text={item.value.mname}
                          detail={item.value.title}
                          price={item.value.price}
                          url={item.value.squareimgurl}/>
                    </TouchableOpacity>
                </View>

        );

    };
    renderHeader =()=>{

       return (

           <View style={{backgroundColor:'rgb(230,230,230)'}}>
               <TopScroll/>

               <Middle />
           </View>
       );

    }
    keyExtractor(item, index) {
        return item.key
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    style={{backgroundColor: 'rgba(240,240,240,1)'}}
                    ItemSeparatorComponent={this._comSeparater}
                    keyExtractor={this.keyExtractor}
                    renderItem={this._renderItem}
                    refreshing={this.state.refreshing}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={this.renderHeader}
                />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
});
