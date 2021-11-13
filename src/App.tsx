import React from 'react';
import { StyleSheet } from 'react-native';

import Routes from './routes';
import {Provider} from 'react-redux'; // importando o provider que é o responsavel por conectar o redux ao react
import store from './Store'; // Esse arquivo contem os reducers

import BottomNavigation from './Components/BottomNavigation';

const App: React.FC = () => { 

  return (
    <>
      {/* <Routes/> */}
      <Provider store={store}>
        <BottomNavigation/>
      </Provider>
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