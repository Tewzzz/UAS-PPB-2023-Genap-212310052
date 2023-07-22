import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
const ijo='#04450B';

const Cardrink = ({navigation}) => {
  const [menu, setMenu] = useState([
    { name: 'teh gelas', price: 15000, image: require('../assets/MINUM.jpg') },
    { name: 'teh gelas', price: 12000, image: require('../assets/MINUM.jpg') },
    { name: 'teh gelas', price: 10000, image: require('../assets/MINUM.jpg') },
    { name: 'teh gelas', price: 15000, image: require('../assets/MINUM.jpg') },
    { name: 'tehgelas', price: 15000, image: require('../assets/MINUM.jpg') },
    { name: 'teh gelas', price: 15000, image: require('../assets/MINUM.jpg') }
  ]);

  const addFoodToCart = (food) => {
    console.log(`Item ${food.name} added to cart.`);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {menu.map((item, index) => (
          <View key={index} style={styles.catalogItem}>
            <Image source={item.image} style={styles.foodImage} />
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.foodPrice}>Rp {item.price}</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate('pesanan')} >
              <Text style={styles.buttonText}>Tambah</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  catalogItem: {
    width: '48%',
    backgroundColor: '#FFFFF',
    padding: 16,
    marginBottom: 15,
    borderRadius: 14,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  foodImage: {
    width: 130,
    height: 120,
    borderRadius: 14,
    marginBottom: 14
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  foodPrice: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'right'
  },
  addButton: {
    borderRadius: 15,
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: ijo
  },
  buttonText: {
    color: ijo,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Cardrink;
