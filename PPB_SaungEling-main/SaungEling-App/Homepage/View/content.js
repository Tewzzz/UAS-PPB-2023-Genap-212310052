import React from 'react';
import {View, Text,Image, StyleSheet} from 'react-native';
const ijo='#04450B'

const Content = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20, color:ijo, fontWeight:'bold', marginBottom:16}}>Favorite Menu</Text>
            <View style={styles.img}>
                <Image source={require('../../assets/homecontent.png')}  />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    img:{
        alignItems:'center',
        
    }
})

export default Content;
