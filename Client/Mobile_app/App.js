import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/components/Home/home';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import CameraScreen from './src/components/Camera/camera';

export default function App(){
  return <NavigationContainer>
         <CameraScreen/>
        </NavigationContainer>
};