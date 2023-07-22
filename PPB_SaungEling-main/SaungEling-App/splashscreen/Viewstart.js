import React from 'react';
import {View, StyleSheet, SafeAreaView, Image, Text, TouchableOpacity, StatusBar    } from 'react-native';

const Viewstart = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.bg}>
                    <Image source={require('../assets/bg.png')} style={{height:400}}/>
                </View>
                <View style={styles.rounded}>
                    <View style={styles.text}>
                        <Text style={styles.textjdl}>Saung Eling Apps</Text>
                        <Text style={styles.textjdl}>Administrator</Text>
                    </View>
                    <View style={{marginTop:36}}>
                        <Text style={styles.deskipsi}>Saung Eling Apps merupakan aplikasi</Text>
                        <Text style={styles.deskipsi}>untuk mengelola layanan Saung Eling</Text>
                        <Text style={styles.deskipsi}>Seperti Mengelola Travel Package </Text>
                        <Text style={styles.deskipsi}>Destinasi, kuliner, Reservasi dan Gallery</Text>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Login')}>
                        <Text style={{fontSize:20,fontWeight:'bold', color:"#fff", textAlign:'center'}}>Get Started</Text>
                    </TouchableOpacity>        
                </View>
                <StatusBar style='light'/>
            </SafeAreaView>
        );
    }



const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    bg:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    rounded :{
        flex: 2,
        borderRadius:30,
        backgroundColor: "#fff",
        alignItems: 'center'
    },
    text:{
       marginTop:36, 
    },
    textjdl:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:24,
        color:'#04450B',
    },
    deskipsi:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'300'
    },
    btn:{
        backgroundColor:'#04450B',
        justifyContent:'center',
        borderRadius:20,
        width:200,
        height:48,
        marginTop:36
    }
})




export default Viewstart;
