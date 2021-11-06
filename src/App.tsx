import React from 'react';
import { StyleSheet } from 'react-native';

import Routes from './routes';
import BottomNavigation from './Components/BottomNavigation';

const App: React.FC = () => { 

  return (
    <>
      {/* <Routes/> */}
      <BottomNavigation/>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: '#c73434',
    alignItems: 'center',
    justifyContent: 'center',
  },
});