import React from 'react';
import AppNavigator from './src/navigators/AppNavigator';
import {signup, signin, verify} from './src/api/signin_signup';

const App = () => {
  //signup("Lê Huỳnh Anh Thư", "anhthu1", "123456", "lehuynhanhthu7403@gmail.com")
  //verify("Lê Huỳnh Anh Thư", "anhthu1", "123456", "lehuynhanhthu7403@gmail.com", "2650")
  //signin("anhthu1","123456")
  return <AppNavigator />;
};

export default App;