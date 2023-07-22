import React, { Component } from 'react';
import {View, Text,StyleSheet, SafeAreaView, StatusBar, Image, TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import Searchbar from './View/searchbar';
import Cardmenu from './View/Cardmenu';
import Content from './View/content';
const ijo='#04450B';

class Homeview extends Component {
    render() {
        
        const {navigation} = this.props;

        return (
        <SafeAreaView style={{flex:1, paddingHorizontal:20, marginTop:10}}>
            <View style={{flex:1}}>
                <View style={styles.atas}>
                    <Image source={require('../assets/logo.png')}/>
                    <TouchableOpacity style={styles.bgprofile}>
                        <FontAwesome5 name="user-alt" size={24} color={ijo} />
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize:32, fontWeight:'bold', color:ijo, marginTop:10}}>Hi, Elingers</Text>
                <Text style={{color:ijo, fontSize:16}}>Jelajahi Rasa dan Pesan Sekarang</Text>
            </View>
            <View style={{flex:0.3}}>
                <Searchbar/>
            </View>
            <View style={{flex:1}}>
                <Cardmenu navigation={navigation}/>
            </View>
            <View style={{flex:2}}>
                <Content/>
            </View>
            <StatusBar/>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    atas:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    bgprofile:{
        width:44,
        height:44,
        backgroundColor:'#eeeeee',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        marginTop:8, marginRight:8
    },
})

export default Homeview;
