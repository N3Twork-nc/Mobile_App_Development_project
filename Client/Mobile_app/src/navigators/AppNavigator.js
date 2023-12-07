import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator , TransitionPresets } from '@react-navigation/stack';
import Welcome from '../components/Welcome/welcome';
import Signin from '../components/Sign in/signin';
import Signup from '../components/Sign up/signup';
import Home from '../components/Home/home';
import Verifycode from '../components/Verify code/verifycode';
import Livingroom from '../components/Home/Rooms/Livingroom/livingroom';
import Explore from '../components/Explore/explore';
import Newspaper from '../components/Explore/News/news';
import CameraScreen from '../components/Camera/camera';
import Afterscan from '../components/After Scan/afterscan';
import Profile from '../components/Profile/profile';
import EditProfile from '../components/Profile/Edit profile/editProfile';
import PlantDetail from '../components/Plant Detail/plantDetail';
import ForgotPassword from '../components/Forgot Password/forgotpassword';
import DashBoard from '../components/Dashboard/dashboard';
import Gardens from '../components/Home/Gardens/gardens';
import Schedule from '../components/Schedule/schedule';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS,
      ...TransitionPresets.SlideFromRightAndroid,
        }}>
         <Stack.Screen name="Welcome" component={Welcome} /> 
        <Stack.Screen name="SignIn" component={Signin}  />
        <Stack.Screen name="SignUp" component={Signup} options={{animationEnabled: false}} />        
        <Stack.Screen name="VerifyCode" component={Verifycode}  />      
        <Stack.Screen name="Livingroom" component={Livingroom} />
        <Stack.Screen name="Home" component={Home} options={{animationEnabled: false}}/>
        <Stack.Screen name="Explore" component={Explore} options={{animationEnabled: false}}/>
        <Stack.Screen name="News" component={Newspaper} options={{animationEnabled: false}}/>
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="Afterscan" component={Afterscan} options={{animationEnabled: false}} />
        <Stack.Screen name="Profile" component={Profile} options={{animationEnabled: false}} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{animationEnabled: false}} />
        <Stack.Screen name="PlantDetail" component={PlantDetail}  />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}  />
        <Stack.Screen name="Dashboard" component={DashBoard} options={{animationEnabled: false}} />
        <Stack.Screen name="Gardens" component={Gardens} options={{animationEnabled: false}} />
        <Stack.Screen name="Schedule" component={Schedule}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
