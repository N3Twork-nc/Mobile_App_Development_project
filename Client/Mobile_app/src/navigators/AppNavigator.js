import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator , TransitionPresets } from '@react-navigation/stack';
import Welcome from '../components/Welcome/welcome';
import Signin from '../components/Sign in/signin';
import Signup from '../components/Sign up/signup';
import Home from '../components/Home/home';
import Verifycode from '../components/Verify code/verifycode';
import Livingroom from '../components/Home/Livingroom/livingroom';
import Explore from '../components/Explore/explore';
import Newspaper from '../components/Explore/News/news';
import CameraScreen from '../components/Camera/camera';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS,
      ...TransitionPresets.SlideFromRightAndroid,
        }}>
         <Stack.Screen name="Welcome" component={Welcome} /> 
        <Stack.Screen name="SignIn" component={Signin}  />
        <Stack.Screen name="SignUp" component={Signup}  />        
        <Stack.Screen name="VerifyCode" component={Verifycode}  />      
        <Stack.Screen name="Livingroom" component={Livingroom} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Explore" component={Explore} options={{animationEnabled: false}}/>
        <Stack.Screen name="News" component={Newspaper} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
