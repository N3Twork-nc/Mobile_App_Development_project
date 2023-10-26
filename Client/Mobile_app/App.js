import React from 'react';
import AppNavigator from './src/navigators/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import CameraScreen from './src/components/Camera/camera';

const App = () =>
{
  return <Provider store={store}>
    <AppNavigator/>
  </Provider> 
}
export default App;
