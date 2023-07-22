import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Viewstart from './splashscreen/Viewstart';
import Viewlogin from './LoginScreen/Viewlogin';
import Homeview from './Homepage/Homeview';
import Orderstatus from './Homepage/Orderstatus';
import Foodmenu from './Foodmenu/Foodmenu';
import Drinkmenu from './Drinkmenu/Drinkmenu';
import Package from './Package/Package';
import Pesanan from './Homepage/Pesanan';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splashscreen from './splashscreen/splashscreen';
import Payment from './Payment/Payment';
import PaymenScreen from './Payment/PaymenScreen';


const Stack=createNativeStackNavigator();

export default function App() {
  return (
    // <Viewstart/>
    // <Viewlogin/>
    // <Homeview/>
    // <Foodmenu/>
    // <Splashscreen/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='splashscreen' component={Splashscreen} options={{headerShown:false}}/>
        <Stack.Screen name='start' component={Viewstart} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Viewlogin} options={{headerShown:false}}/>

        <Stack.Screen name='Home' component={Homeview} options={{headerShown:false}}/>
        <Stack.Screen name='food' component={Foodmenu} options={{headerShown:false}}/>
        <Stack.Screen name='drink' component={Drinkmenu} options={{headerShown:false}}/>
        <Stack.Screen name='package' component={Package} options={{headerShown:false}}/>
        <Stack.Screen name='pesanan' component={Pesanan} options={{headerShown:false}}/>
        <Stack.Screen name='payment' component={Payment} options={{headerShown:false}}/>
        <Stack.Screen name='paymentscreen' component={PaymenScreen} options={{headerShown:false}}/>
        <Stack.Screen name='orderstatus' component={Orderstatus} options={{headerShown:false}}/>

      </Stack.Navigator> 
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
