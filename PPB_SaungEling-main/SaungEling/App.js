import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Viewstart from './splashscreen/Viewstart';
import Viewlogin from './LoginScreen/Viewlogin';
import Homeview from './Homepage/Homeview';
import Foodmenu from './Foodmenu/Foodmenu';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splashscreen from './splashscreen/splashscreen';


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
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

