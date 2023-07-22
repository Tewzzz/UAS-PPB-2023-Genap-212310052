import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
const ijo='#04450B'

const Searchbar = () => {
    return (
        <View style={styles.ractangel} >
            <View style={styles.content}>
                <Text style={{color:'#a7a7a7', fontStyle:'italic'}}>Type Your Favorite Food</Text>
                <FontAwesome5 name="search" size={20} color={ijo} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    ractangel:{
        flex:1,
        backgroundColor:'#eeeeee',
        justifyContent:'center',
        borderRadius:25
    },
    content:{
        flexDirection:'row',
        paddingHorizontal:25,
        justifyContent:'space-between'
    }
})

export default Searchbar;
