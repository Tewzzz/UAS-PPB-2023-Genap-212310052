import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const PaymentScreen = ({navigation}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentTitle}>Pembayaran dengan Kartu Kredit</Text>
        <View style={styles.cardContainer}>
          <Text style={styles.cardLabel}>Nomor Kartu</Text>
          <TextInput
            style={styles.cardInput}
            placeholder="XXXX XXXX XXXX XXXX"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
            maxLength={19}
          />
          <Text style={styles.cardLabel}>Nama Pemegang Kartu</Text>
          <TextInput
            style={styles.cardInput}
            placeholder="Nama Pemegang Kartu"
            value={cardName}
            onChangeText={setCardName}
          />
          <View style={styles.cardRow}>
            <View style={styles.cardRowItem}>
              <Text style={styles.cardLabel}>Masa Berlaku</Text>
              <TextInput
                style={styles.cardInput}
                placeholder="MM/YY"
                value={cardExpiry}
                onChangeText={setCardExpiry}
                keyboardType="numeric"
                maxLength={5}
              />
            </View>
            <View style={styles.cardRowItem}>
              <Text style={styles.cardLabel}>CVV</Text>
              <TextInput
                style={styles.cardInput}
                placeholder="CVV"
                value={cardCvv}
                onChangeText={setCardCvv}
                keyboardType="numeric"
                maxLength={4}
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.payButton} onPress={()=>navigation.navigate('orderstatus')}>
        <Text style={styles.payButtonText}>Bayar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
  },
  paymentContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: '100%',
  },
  paymentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardInput: {
    height: 40,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardRowItem: {
    flex: 0.5,
    marginRight: 10,
  },
  payButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
   justifyContent:'flex-end',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
