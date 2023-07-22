import React, { Component } from 'react';
import { View, StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'; // Import TouchableOpacity
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import Searchbar from '../Homepage/View/searchbar';
import Cardfood from './Cardfood';
const ijo = '#04450B';

class Foodmenu extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.judul}>
          <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <Ionicons name="arrow-back" size={24} color={ijo} style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.teks}>Food Menu</Text>
        </View>
        <View style={styles.Searchbar}>
          <Searchbar />
        </View>
        <View style={styles.content}>
          <Cardfood navigation={navigation}/>
        </View>
        <StatusBar />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor:"#ffffff"
  },
  judul: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#FFFFFF',
  },
  teks: {
    color: ijo,
    fontSize: 32,
    fontWeight: 'bold',
    margin: 20,
  },
  backButton: {
    marginLeft: 10,
  },
  Searchbar: {
    flex: 0.3,
    margin: 10,
  },
  content: {
    flex: 4,
    backgroundColor: '#FFFFFF',
  },
});

export default Foodmenu;
