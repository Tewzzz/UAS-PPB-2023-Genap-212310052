import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

class Orderstatus extends React.Component {

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Order status</Text>
        <View style={styles.content}>
          <Image
            source={require('../assets/dwnl.jpg')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.description}>your order was successfull</Text>
          <Text style={styles.description2}>Please take your order</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Back to Dashboard </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'green'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginTop:20
  },
  description: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'green'
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
    description2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'grey'
  },
});

export default Orderstatus;
