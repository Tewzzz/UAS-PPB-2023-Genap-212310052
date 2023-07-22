import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';

const Payment = ({navigation}) => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Payment Method</Text>
      <View style={styles.paymentOptionsContainer}>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPayment === 'DANA' && styles.selectedPaymentOption,
          ]}
          onPress={() => setSelectedPayment('DANA')}
        >
          <Image source={require('../assets/logocard.png')} style={styles.paymentLogo} />
          <Text style={styles.paymentText}>DANA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPayment === 'Kartu Debit' && styles.selectedPaymentOption,
          ]}
          onPress={() => setSelectedPayment('Kartu Debit')}
        >
          <Image source={require('../assets/logocard.png')} style={styles.paymentLogo} />
          <Text style={styles.paymentText}>Kartu Debit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPayment === 'COD' && styles.selectedPaymentOption,
          ]}
          onPress={() => setSelectedPayment('COD')}
        >
          <Image source={require('../assets/logocard.png')} style={styles.paymentLogo} />
          <Text style={styles.paymentText}>COD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPayment === 'PayPal' && styles.selectedPaymentOption,
          ]}
          onPress={() => setSelectedPayment('PayPal')}
        >
          <Image source={require('../assets/logocard.png')} style={styles.paymentLogo} />
          <Text style={styles.paymentText}>PayPal</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.button, selectedPayment === null && styles.disabledButton]}
        disabled={selectedPayment === null}
        onPress={()=>navigation.navigate('paymentscreen')}
      >
        <Text style={styles.buttonText}>CONFIRM</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
  },
  paymentOptionsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    margin: 20,
    width: 350,
  },
  selectedPaymentOption: {
    borderColor: 'green',
  },
  paymentLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  paymentText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    margin: 30,
    borderRadius: 14,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Payment;