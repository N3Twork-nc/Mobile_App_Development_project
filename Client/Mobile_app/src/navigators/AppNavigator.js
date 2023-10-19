import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../components/Welcome/welcome';
import Signin from '../components/Sign in/signin';
import Signup from '../components/Sign up/signup';
import Verifycode from '../components/Verify code/verifycode';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
          headerShown: false // Hide the header bar for all screens
        }}>
         <Stack.Screen name="Welcome" component={Welcome} /> 
        <Stack.Screen name="SignIn" component={Signin} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="VerifyCode" component={Verifycode} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
