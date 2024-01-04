import React, {Component} from 'react';
import AppNavigator from './src/navigators/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { StatusBar, Platform } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Schedule from './src/components/Schedule/schedule';
import ResetPass from './src/components/Profile/Reset Pass/resetpass';
import CameraScreen from './src/components/Camera/camera';

class App extends Component
{
  componentDidMount() {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('white');
    }
  };
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
//     <CameraScreen />
//    </NavigationContainer>
//   </Provider>
// );
// };  





