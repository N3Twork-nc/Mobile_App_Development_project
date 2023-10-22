import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Home from './src/components/Home/home';
import Signin from './src/components/Sign in/signin'

export default function App() {
  return <NavigationContainer>
          <Home/>
         </NavigationContainer>
};
