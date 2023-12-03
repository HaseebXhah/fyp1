import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './EMS/Screens/Login';
import mainscreen from './EMS/Screens/mainscreen';
import tempview from './EMS/Screens/tempview';
import Signup from './EMS/Screens/Signup';
import SplashScreen from './EMS/Screens/SplashScreen';
import organizerprofile from './EMS/Screens/organizerprofile';
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen initialRouteName="SplashScreen" />
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="tempview" component={tempview} />
        <Stack.Screen name="mainscreen" component={mainscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
