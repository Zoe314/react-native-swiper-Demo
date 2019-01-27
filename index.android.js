/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry,Dimensions, StyleSheet,Image, View, Text , } from 'react-native';
 import Swiper from 'react-native-swiper'
const {width} = Dimensions.get('window');  //解构赋值 获取屏幕宽度
 
var swiperDemo = React.createClass({
  render: function() {
    return (
        <View style={styles.container}>
            {/*设置horizontal为竖向排列 autoplay为自动播放*/}
             <Swiper style={styles.wrapper} height={200} horizontal={false} autoplay autoplayTimeout={1}  >
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
            <Swiper style={styles.wrapper} height={240} autoplay
                    onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                    dot={<View style={{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                    activeDot={<View style={{backgroundColor: 'yellow', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    paginationStyle={{
                        bottom: 23, left: null, right: 10
                    }}

                    loop>
                <View style={styles.slide} >
                    <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
                    <Image resizeMode='stretch' style={styles.image} source={require('./img/1.png')} />
                </View>
                <View style={styles.slide}>
                    <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
                    <Image resizeMode='stretch' style={styles.image} source={require('./img/2.png')} />
                </View>
                <View style={styles.slide} >
                    <Text numberOfLines={1}>Why Stone split from Garfield</Text>
                    <Image resizeMode='stretch' style={styles.image} source={require('./img/3.png')} />
                </View>
                <View style={styles.slide}>
                    <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
                    <Image resizeMode='stretch' style={styles.image} source={require('./img/4.png')} />
                </View>
            </Swiper>
        </View>

    );
  }
})
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    wrapper: {
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width:width,
        flex: 1
    }
});
AppRegistry.registerComponent('swiperDemo', () => swiperDemo);
