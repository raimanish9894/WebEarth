import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MobileScreen from './Screens/MobileScreen';
import OtpScreen from './Screens/OtpScreen';
import HelloScreen from './Screens/HelloScreen';
import RegisterScreen from './Screens/RegisterScreen';
import PersonScreen from './Screens/PersonScreen';


const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName="Mobile">
        <Stack.Screen  name="Mobile" component={MobileScreen} />
        <Stack.Screen name="Verify" component={OtpScreen} />
        <Stack.Screen name="Welcome" component={HelloScreen} />
        <Stack.Screen name="Sign Up" component={RegisterScreen} />
        <Stack.Screen name="Person" component={PersonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


