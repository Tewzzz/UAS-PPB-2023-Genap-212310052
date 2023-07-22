import React, { Component } from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import Searchbar from '../Homepage/View/searchbar';
const ijo='#04450B';

class Foodmenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.judul}>
                    <Text style={styles.teks}>Food Menu</Text>
                </View>
                <View style={styles.Searchbar}>
                    <Searchbar/>
                </View>
                <View style={styles.content}>

                </View>
                <StatusBar/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10
    },
    judul:{
        flex:0.5,
        backgroundColor : 'red'
    },
    teks:{
        color:ijo,
        fontSize:32,
        fontWeight:'bold'
    },
    Searchbar:{
        flex:0.3
    },
    content:{
        flex:4,
        backgroundColor:'blue'
    }
})

export default Foodmenu;
