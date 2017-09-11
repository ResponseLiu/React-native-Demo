/**
 * Created by a1 on 2017/8/22.
 */
import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert,
    Image,
    Dimensions,
    TextInput,
    ScrollView
} from 'react-native';
import  Main from '../Demo/Main'
import { StackNavigator } from 'react-navigation';
import ChatScreen from '../Demo/ChatScreen'

const REQUEST_URL = 'https://api.github.com/search/repositories?q=javascript&sort=stars';
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export  default  class Home extends React.Component {
    static navigationOptions = {
    header:null

};
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {

            dataArray:[],
            refreshing: true, //初始化不刷新
            currendPage:0
        };
      }

    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        //这个是js的访问网络的方法
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                let data = responseData.items;
                let dataBlob = [];
                // let i = 0;
                // data.map(function (item) {
                //     dataBlob.push({
                //         key: i,
                //         value: item,
                //     });
                //     i++;
                //
                // });
                for (var i=0;i<8;i++){

                    var item = data[i];
                    dataBlob.push({
                        key: i,
                        value: item,
                    });

                }
                this.setState({

                    dataArray: dataBlob,
                    refreshing:false

                });
                data = null;
                dataBlob = null;
            })
            .catch((error) => {

            })
            .done();
    }
    itemClick(item, index) {

         const { navigate } = this.props.navigation;
         navigate('chat',{ user: item.value.name } );

    }
    _comSeparater = ()=> {

        return (
            <View style={{height: 1, backgroundColor: 'skyblue'}}/>
        );
    };

    _youLikerenderItem=({item,index})=>{

        return (

            <View style={{
                backgroundColor:'white',
                padding:5,
                flexDirection:'row'
                } } >

                <Image style={{width:70,height:70}} source={require('../Demo/Image/h_3.png')}/>

                <View style={{margin:10}}>

                    <Text>{item.value.name}</Text>
                    <Text>{item.value.id}</Text>
                    <Text>{item.value.full_name}</Text>

                </View>


            </View>

        );


    };

    _renderItem = ({item, index}) => {
        return (

            <View style={{

                backgroundColor:'white' ,
                width:ScreenWidth/4,
                height:75,
                padding:10,
                alignItems:'center'

            }}>
                <Image
                    source={require('../Demo/Image/junyong04.jpg')}
                    style= {flatListStyles.pict}/>
                <Text style={flatListStyles.item}>商品分类</Text>

            </View>
        );
    };
    _rendYoulikeView=()=>{

        return (

            <View style={{marginTop:10}}>

                <View style={{
                    width:ScreenWidth,
                    height: 50,
                    backgroundColor:'white',
                    flexDirection:'row',
                    alignItems:'center'}}>
                    <Image
                        source={require('../Demo/Image/h_9.png')}
                        style={{width: 30,height :30,marginLeft:10}}/>
                    <Text style={{marginLeft:5}}>猜你喜欢</Text>


                </View>

                <FlatList
                    data={this.state.dataArray}

                    style={{backgroundColor: 'rgba(240,240,240,1)'}}
                    ItemSeparatorComponent={this._comSeparater}
                    renderItem={this._youLikerenderItem}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />

            </View>


        );


    };
    _renderScrollView = () => {
        return (

            <ScrollView style={{
                backgroundColor:'rgb(240,240,240)',
                height:ScreenHeight-64-49}}>
                <View style={{backgroundColor:'white',paddingBottom: 10} }>

                    <ScrollView horizontal={true}
                                pagingEnabled={true}
                                showsHorizontalScrollIndicator={false}
                                onMomentumScrollEnd={this.onScrollToEnd.bind(this)}>

                        {this.renderScrollItemView()}

                    </ScrollView>
                    <View style={flatListStyles.circle}>

                        {this.renderCircle()}
                        
                    </View>

                    <Image style={{
                        width:ScreenWidth-20,
                        height:100,
                        marginLeft:10
                        }}
                           source={require('../Demo/Image/ad1的副本.png')}/>

                </View>
                {this._rendMiddleView()}
                {this._rendYoulikeView()}


            </ScrollView>

        );
    };
    onScrollToEnd=(e)=>{

        var current =Math.floor(e.nativeEvent.contentOffset.x/ScreenWidth);

        this.setState({

            currendPage:current

        });

    };
    renderCircle(){

        var itemArr = [],style;

        for(var i = 0;i<2;i++){


            style = (i === this.state.currendPage)?{color:'orange'}:{color:'gray'};

            itemArr.push(

                <Text key={i}
                      style={[{fontSize:18},style]}>&bull;</Text>
            );

        }
        return itemArr;
    }
    renderScrollItemView(){

        var itemArr = [];
        var  colorArr = ['red','green'];

        for(var i = 0;i<colorArr.length;i++){

            itemArr.push(

                <View key = {i} style={[{
                    backgroundColor:colorArr[i],
                    width:ScreenWidth,
                    height:150},flatListStyles.container]}>

                         <FlatList
                             data={this.state.dataArray}
                             style={{backgroundColor: 'rgba(240,240,240,1)'}}
                             ItemSeparatorComponent={this._comSeparater}
                             renderItem={this._renderItem}
                             refreshing={this.state.refreshing}
                             showsVerticalScrollIndicator={false}
                             showsHorizontalScrollIndicator={false}
                             contentContainerStyle={flatListStyles.list}//设置cell的样式
                             pageSize={4}
                             scrollEnabled={false}

                         />

                </View>

            );
        }
      return itemArr;
    }
    _renderHeader = () => {
        return (

            <View style={flatListStyles.HeaderStyle}>

                <Text style={flatListStyles.AddressStyle}>广州</Text>

                <TextInput style={flatListStyles.textInputStyle}
                           placeholder='请输入商家名称'/>
                <Text style={flatListStyles.AddressStyle}></Text>

            </View>


        );
    };
    _rendMiddleView = () => {
        return (

            <View style={flatListStyles.Middle}>

               <View style={{flexDirection:'column',justifyContent:'space-between'}}>

                   <View style={flatListStyles.hotStyle1}>

                       <View>

                           <Text style={{marginLeft:20,fontSize:16}}>热卖套餐</Text>
                           <Text style={{marginLeft:20,fontSize:14,color:'rgb(170,170,170)',paddingTop:5}}>热卖套餐</Text>

                       </View>
                       <Image
                           source={require('../Demo/Image/hot_3的副本.png') }
                           style={{width: 40,height:40,marginRight:20}}/>
                   </View>

                   <View style={flatListStyles.hotStyle1}>

                       <View>

                           <Text style={{marginLeft:20,fontSize:16}}>热卖套餐</Text>
                           <Text style={{marginLeft:20,fontSize:14,color:'rgb(170,170,170)',paddingTop:5}}>热卖套餐</Text>

                       </View>
                       <Image
                           source={require('../Demo/Image/hot_3的副本.png') }
                           style={{width: 40,height:40,marginRight:20}}/>
                   </View>

               </View>

                <View style={{flexDirection:'column',justifyContent:'space-between'}}>

                    <View style={flatListStyles.hotStyle1}>

                        <View>

                            <Text style={{marginLeft:20,fontSize:16}}>热卖套餐</Text>
                            <Text style={{marginLeft:20,fontSize:14,color:'rgb(170,170,170)',paddingTop:5}}>热卖套餐</Text>

                        </View>
                        <Image
                            source={require('../Demo/Image/hot_3的副本.png') }
                            style={{width: 40,height:40,marginRight:20}}/>


                    </View>

                    <View style={flatListStyles.hotStyle1}>

                        <View>

                            <Text style={{marginLeft:20,fontSize:16}}>热卖套餐</Text>
                            <Text style={{marginLeft:20,fontSize:14,color:'rgb(170,170,170)',paddingTop:5}}>热卖套餐</Text>

                        </View>
                        <Image
                            source={require('../Demo/Image/hot_3的副本.png') }
                            style={{width: 40,height:40,marginRight:20}}/>


                    </View>

                </View>
            </View>


        );
    };

    render() {


        return (

            <View>

                {this._renderHeader()}
                {this._renderScrollView()}




            </View>

            // <View style={flatListStyles.container}>
            //
            //     <FlatList
            //         data={this.state.dataArray}
            //
            //         style={{backgroundColor: 'rgba(240,240,240,1)'}}
            //         ItemSeparatorComponent={this._comSeparater}
            //         renderItem={this._renderItem}
            //         refreshing={this.state.refreshing}
            //         showsVerticalScrollIndicator={false}
            //         showsHorizontalScrollIndicator={false}
            //         contentContainerStyle={flatListStyles.list}//设置cell的样式
            //         pageSize={4}
            //         onRefresh={() => {
            //
            //             this.setState({refreshing: true})//开始刷新
            //             this.fetchData();
            //
            //         }}
            //     />
            // </View>
        );

    }
}

const flatListStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',

    },
    cellContainer:{

        flex: 1,

        alignItems:'center',
    },
    item: {

        fontSize: 15,
        height: 20,
        marginTop:10,
        textAlign:'center',
        color:'orange'
    },
    pict:{

        width:30,
        height:30,
        borderRadius:15

    },
    list: {

        flexDirection: 'row',//设置横向布局
        flexWrap: 'wrap',  //设置换行显示
        backgroundColor: 'rgba(240,240,240,1)',
    },
    //头部导航
    HeaderStyle:{


        backgroundColor:'#0398ff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:64,

    },
    AddressStyle:{

        color:'white',
        fontSize:15,
        marginLeft:20,
        marginTop:12
    },
    textInputStyle:{

        width:250*ScreenWidth/375,
        height:35,
        backgroundColor:'white',
        marginTop:20,
        borderRadius:17,
        paddingLeft:10,
        fontSize:15

    },
    circle:{

        flexDirection:'row',
        justifyContent:'center',

    },
    Middle:{

        backgroundColor:'rgb(230,230,230)',
        width:ScreenWidth,
        height:150,
        marginTop:8,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    hotStyle1:{

       backgroundColor:'white',
        width:ScreenWidth/2-1,
        height:74,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },
    hotStyle2:{

        backgroundColor:'white',
        width:ScreenWidth/2-1,
        height:74,

    },
});

const One = StackNavigator({
    Home: { screen:Home},
    chat:{screen:ChatScreen}
});
module.exports=One;