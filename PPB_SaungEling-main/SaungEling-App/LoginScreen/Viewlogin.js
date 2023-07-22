import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, SafeAreaView, StatusBar, Pressable } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';

const ijo = '#04450B';

const Viewlogin = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [isOpenPass, setOpenPass] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Validasi login
    if (email === 'user@gmail.com' && password === '4321') {
      // Jika login berhasil, navigate ke halaman utama (misalnya, 'Home')
      navigation.navigate('Home');
    } else {
      setErrorMessage('Email atau password salah.');
    }
  };

  const hendlerOpenpass = () => {
    setOpenPass(!isOpenPass);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bg}>
        <Image source={require('../assets/Maskgroup.png')} />
      </View>
      <View style={styles.rectangle}>
        <View style={styles.wel}>
          <Text style={styles.teks}>Welcome</Text>
          <Text>Please Login With Your Account</Text>
        </View>
        <View style={styles.email}>
          <Text style={{ marginBottom: 12 }}>Email :</Text>
          <TextInput
            placeholder="Input Your Email"
            style={{ padding: 10, borderWidth: 1, borderColor: ijo, borderRadius: 10 }}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.email}>
          <Text style={{ marginBottom: 12 }}>Password :</Text>
          <View style={styles.pass}>
            <TextInput
              placeholder="Input Your Password"
              secureTextEntry={isOpenPass}
              value={password}
              onChangeText={setPassword}
            />
            <Pressable onPress={hendlerOpenpass}>
              <FontAwesome5 name={isOpenPass ? 'eye' : 'eye-slash'} size={24} color={ijo} />
            </Pressable>
          </View>
        </View>
        <View style={styles.remamberme}>
          <View style={{ marginLeft: 15 }}>
            <CheckBox
              title="Remember me"
              checked={checked}
              checkedColor={ijo}
              onPress={() => setChecked(!checked)}
              containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
            />
          </View>
          <TouchableOpacity>
            <Text style={{ color: 'red', marginLeft: 25 }}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
          {errorMessage ? <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text> : null}
          <TouchableOpacity style={styles.btn} onPress={handleLogin}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', textAlign: 'center' }}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.register}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: ijo, textAlign: 'center' }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
  },
  rectangle: {
    flex: 2.5,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  wel: {
    alignItems: 'center',
  },
  teks: {
    color: ijo,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 32,
  },
  email: {
    marginTop: 32,
    paddingHorizontal: 36,
  },
  pass: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: ijo,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  remamberme: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: ijo,
    justifyContent: 'center',
    borderRadius: 20,
    width: 200,
    height: 48,
    marginTop: 32,
  },
  register: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: ijo,
    justifyContent: 'center',
    borderRadius: 20,
    width: 200,
    height: 48,
    marginTop: 8,
  },
});

export default Viewlogin;