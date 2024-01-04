import React, {Component,useEffect} from 'react';
import AppNavigator from './src/navigators/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { StatusBar, Platform} from 'react-native';
import 'react-native-gesture-handler';
import * as Notifications from 'expo-notifications'




class App extends Component
{
  componentDidMount() {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('white');
    }
  };
  

  // Handle incoming notifications when the app is in the foreground
  
  render()
  {
  return <Provider store={store}>
    <AppNavigator/>
  </Provider> 
  }
  
}
export default App;


// export default function App() {
// return (
// <Provider store={store}>
//  <NavigationContainer>
//     <CameraScreen/>
//    </NavigationContainer>
//   </Provider>
// );
// }





