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
    View,
    FlatList,
    Dimensions,
    SectionList,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import api from '../api'
import MineScrollView from '../Four/ScrollviewItem'
var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;
export default class ReactDemo extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '我的',
        headerStyle:{backgroundColor:'#06C1AE'},
    });
// 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {

        data:api.leftItem,
        Index:0

    };
  }
    componentDidMount() {

        this.setState({

            data:api.leftItem,
            Index:0

        });
    }
    keyExtractor(item, index) {

        return item.key
    }
    _comSeparater = ()=> {

        return (

            <View style={{height: 1, backgroundColor: 'rgb(230,230,230)'}}/>
        );
    };
    leftClickW(item, index) {

        this.setState({

            data:api.leftItem,
            Index:index

        });
    }
    _renderLeftItem=({item,index})=>{

        return (
            <TouchableOpacity onPress={this.leftClickW.bind(this,item,index)}>
                <View style={{
                    width: WIDTH/3*0.7,
                    backgroundColor: this.state.Index === index? 'red' : 'white',
                    height:55,flexDirection:'row',justifyContent:'center'}}>

                    <Text style={{color:this.state.Index===index?'white':'black',lineHeight:50}}>{item.valye.name}</Text>

                </View>
            </TouchableOpacity>
        );
    };
    _sectionComp = (info) => {
        var txt = info.section.key;
        return <Text
            style={{ height: 40, textAlign: 'left', lineHeight:35, backgroundColor: 'rgb(240,240,240)', color: 'black', fontSize: 16 }}>{txt}</Text>
    };
    ListHeader = ()=>{

        return (

            <View style={{width:WIDTH/3*2.3-10,height:120}}>


                <MineScrollView isscrollview={false} imageArra={api.imageArra}>


                </MineScrollView>

            </View>
        )
    }
    _rendSectionHeader=({item,index})=>{
        return (

            <View key = {index.index}
                style={{backgroundColor:'white',flexDirection:'row',flexWrap:'wrap'}}>

                {
                    item.message.map((item, i) =>{

                      return (

                          <View key={i}
                              style={{
                                  width:(WIDTH/3*2.3-10)/3,
                                  height:(WIDTH/3*2.3-10)/3,
                                  backgroundColor:'white',
                                  flexDirection:'column',
                                  alignItems:'center',paddingTop:4}}>
                              <Image
                                  source={require('./82E58PICrpc.jpg')}
                                  style={{width:50,height: 50 }}/>
                              <Text style={{color:'black',marginTop:10}}>{item.title}</Text>
                          </View>
                      )
                    })
                }
            </View>
        )
    };
    render() {

        return (
            <View style={styles.container}>

                <FlatList
                    style={{
                        width: WIDTH/3*0.7,
                        height:HEIGHT-64-49,
                        backgroundColor:'rgb(240,240,240)'}}
                    data={api.leftItem}
                    renderItem={this._renderLeftItem}
                    removeClippedSubviews={false}
                    ItemSeparatorComponent={this._comSeparater}
                    keyExtractor={this.keyExtractor}
                />

                <View
                    style={{
                        width: WIDTH/3*2.3-10,
                        height:HEIGHT-64-49,
                        backgroundColor:'rgb(240,240,240)',marginLeft:10}}>

                    <SectionList
                        removeClippedSubviews={false}
                        contentInset={{top:0,left:0,bottom:0,right:0}}
                        renderItem={this._rendSectionHeader}
                        ListHeaderComponent={this.ListHeader}
                        renderSectionHeader={this._sectionComp}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={this.keyExtractor}
                        sections={ [
                            { key: "童装",data:[ {message:[{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }],index:'1'}] },
                            { key: "女装", data:[{message:[{ title: "表哥" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }],index:'2'}] },
                            { key: "男装", data:[ {message:[{ title: "成吉思汗" }, { title: "超市快递" }],index:'4'}] },
                            { key: "女士套装", data:[{message: [{ title: "王磊" }, { title: "王者荣耀" }, { title: "往事不能回味" },{ title: "王小磊" }, { title: "王中磊" }, { title: "王大磊" }],index:'3'}] },
                        ]}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(240,240,240)',
        width:WIDTH,
        flexDirection:'row'
    },
});