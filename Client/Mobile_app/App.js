import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Home from './src/components/Home/home';
import Signin from './src/components/Sign in/signin'
import AppNavigator from './src/navigators/AppNavigator';

const App = () =>
{
  return <AppNavigator/>
}
export default App;
{/*--
export default function App() {
  return <NavigationContainer>
          <Signin/>
         </NavigationContainer>
};
*/}