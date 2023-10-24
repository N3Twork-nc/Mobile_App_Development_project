import React from 'react';
import AppNavigator from './src/navigators/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
const App = () =>
{
  return <Provider store={store}>
    <AppNavigator/>
  </Provider> 
}
export default App;
