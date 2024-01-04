import React,{useEffect,useState,useRef} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator , TransitionPresets } from '@react-navigation/stack';
import Welcome from '../components/Welcome/welcome';
import Signin from '../components/Sign in/signin';
import Signup from '../components/Sign up/signup';
import Home from '../components/Home/home';
import Verifycode from '../components/Verify code/verifycode';
import Room from '../components/Home/Rooms/room';
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
import Recently from '../components/Home/Recently/recently';
import AboutUs from '../components/Profile/About us/aboutUs';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Saved from '../components/Saved/saved';

const Stack = createStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});



async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync({
      projectId:"6e498d2f-2b39-420e-ae7a-db038f9adb7b"
    })).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}

const AppNavigator = () => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS,
      ...TransitionPresets.SlideFromRightAndroid,
        }}>
         <Stack.Screen name="Welcome" component={Welcome} /> 
        <Stack.Screen name="SignIn" component={Signin}  />
        <Stack.Screen name="SignUp" component={Signup}/>        
        <Stack.Screen name="VerifyCode" component={Verifycode}  /> 
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>     
        <Stack.Screen name="Room" component={Room} options={{animationEnabled: false}}/>
        <Stack.Screen name="Home" component={Home} options={{animationEnabled: false}}/>
        <Stack.Screen name="Explore" component={Explore} options={{animationEnabled: false}}/>
        <Stack.Screen name="News" component={Newspaper} options={{animationEnabled: false}}/>
        <Stack.Screen name="CameraScreen" component={CameraScreen} options={{animationEnabled: false}}/>
        <Stack.Screen name="Afterscan" component={Afterscan} options={{animationEnabled: false}} />
        <Stack.Screen name="Profile" component={Profile} options={{animationEnabled: false}} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{animationEnabled: false}} />
        <Stack.Screen name="PlantDetail" component={PlantDetail} options={{animationEnabled: false}} />
        <Stack.Screen name="Dashboard" component={DashBoard} options={{animationEnabled: false}} />
        <Stack.Screen name="Gardens" component={Gardens} options={{animationEnabled: false}} />
        <Stack.Screen name="Schedule" component={Schedule}  options={{animationEnabled: false}}/>
        <Stack.Screen name="AboutUs" component={AboutUs} options={{animationEnabled: false}} />
        <Stack.Screen name="Recently" component={Recently} options={{animationEnabled: false}} />
        <Stack.Screen name="Saved" component={Saved} options={{animationEnabled: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
