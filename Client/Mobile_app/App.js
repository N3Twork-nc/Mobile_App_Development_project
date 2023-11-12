import React from 'react';
import AppNavigator from './src/navigators/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import CameraScreen from './src/components/Camera/camera';
import { NavigationContainer } from '@react-navigation/native';
import Signin from './src/components/Sign in/signin';
import Home from './src/components/Home/home';
import Verifycode from './src/components/Verify code/verifycode';
import Afterscan from './src/components/After Scan/afterscan';
import Profile from './src/components/Profile/profile';


/*const App = () =>
{
  //info("anhthu", "Anh Thư", "Nữ", "0333478530", "KTX khu B")
  return <Provider store={store}>
    <AppNavigator/>
  </Provider> 
}
export default App;*/


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <CameraScreen/>
      </NavigationContainer>
    </Provider>
  );
}

