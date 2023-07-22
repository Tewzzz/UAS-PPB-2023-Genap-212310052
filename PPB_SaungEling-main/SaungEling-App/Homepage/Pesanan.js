import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const ijo = '#04450B';


const Pesanan= ({navigation}) => {
  const [pesanan, setPesanan] = useState([
    { id: '1', nama: 'sate', harga: 15000, jumlah: 0 },
    { id: '2', nama: 'sate', harga: 12000, jumlah: 0 },
    { id: '3', nama: 'sate', harga: 10000, jumlah: 0 },
  ]);

  const [totalHarga, setTotalHarga] = useState(0);

  const hitungTotalHarga = () => {
    let total = 0;
    pesanan.forEach((item) => {
      total += item.harga * item.jumlah;
    });
    setTotalHarga(total);
  };

  const tambahJumlah = (id) => {
    const newPesanan = pesanan.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, jumlah: item.jumlah + 1 };
        return {
          ...updatedItem,
          harga: updatedItem.jumlah * updatedItem.harga,
        };
      }
      return item;
    });
    setPesanan(newPesanan);
    hitungTotalHarga();
  };

  const kurangJumlah = (id) => {
    const newPesanan = pesanan.map((item) => {
      if (item.id === id && item.jumlah > 1) {
        const updatedItem = { ...item, jumlah: item.jumlah - 1 };
        return {
          ...updatedItem,
          harga: updatedItem.jumlah * updatedItem.harga,
        };
      }
      return item;
    });
    setPesanan(newPesanan);
    hitungTotalHarga();
  };

  const hapusPesanan = (id) => {
    const newPesanan = pesanan.filter((item) => item.id !== id);
    setPesanan(newPesanan);
    hitungTotalHarga();
  };

  const renderItem = ({ item }) => (
    <View style={styles.pesananContainer}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/download.jpg')} style={styles.gambarProduk} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.pesananNama}>{item.nama}</Text>
        <Text style={styles.pesananHarga}>Harga: Rp {item.harga}</Text>
        <View style={styles.jumlahContainer}>
          <TouchableOpacity onPress={() => kurangJumlah(item.id)}>
            <Feather name="minus" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.jumlahText}>{item.jumlah}</Text>
          <TouchableOpacity onPress={() => tambahJumlah(item.id)}>
            <Feather name="plus" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.hapusButton}
        onPress={() => hapusPesanan(item.id)}
      >
        <Text style={styles.hapusButtonText}>Hapus</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.judul}>
          <TouchableOpacity onPress={()=>navigation.navigate('food')}>
            <Ionicons name="arrow-back" size={34} style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.teks}>PESANAN</Text>
        </View>
      <FlatList
        data={pesanan}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderText}>Keranjang belanja kosong</Text>
          </View>
        )}
      />
      {pesanan.length > 0 ? (
        <View style={styles.totalContainer}>
          <Text style={styles.totalHarga}>Rp {totalHarga}</Text>
          <TouchableOpacity
            style={[styles.checkoutButton, pesanan.length === 0 && styles.checkoutButtonDisabled]}
            onPress={() => navigation.navigate('payment')}
            disabled={pesanan.length === 0}
          >
            <Text style={[styles.checkoutButtonText, pesanan.length === 0 && styles.checkoutButtonTextDisabled]}>
              <Feather name="shopping-cart" size={20} color="white" />
              &nbsp; Checkout
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
 judul: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#FFFFFF',
    
  },
  backButton: {
    marginLeft: 10,
    color:ijo
  },
  teks: {
    color: ijo,
    fontSize: 34,
    fontWeight: 'bold',
    margin: 20,
  },
  pesananContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    borderRadius: 8,
  },
  imageContainer: {
    marginRight: 10,
  },
  gambarProduk: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
  },
  pesananNama: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pesananHarga: {
    fontSize: 14,
    marginTop: 4,
  },
  jumlahContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  jumlahText: {
    marginHorizontal: 8,
    fontWeight: 'bold',
  },
  hapusButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 4,
  },
  hapusButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingHorizontal: 4,
    paddingVertical: 7,
    backgroundColor: 'WHIATE',
    borderRadius: 8,
    shadowOffset:30
  },
  totalHarga: {
    fontSize: 18,
    fontWeight: 'bold',
    color: ijo,
  },
  checkoutButton: {
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  checkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  checkoutButtonDisabled: {
    backgroundColor: 'gray',
  },
  checkoutButtonTextDisabled: {
    color: 'lightgray',
  },
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default Pesanan;

