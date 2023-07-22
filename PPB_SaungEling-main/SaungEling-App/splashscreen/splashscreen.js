import React, { Component } from 'react';
import { Image } from 'react-native';
import {SafeAreaView, StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/native';


class Splashscreen extends Component {

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('start'))
        }, 3000);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Image source={require('../assets/LOGOijo.jpg')} style={{width:150, height:150}}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#044500',
      },
      image: {
        width: 200,
        height: 200,
      },
})

export default Splashscreen;
