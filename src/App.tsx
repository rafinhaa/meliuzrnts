import React from 'react';
import {View, Text, StyleSheet} from 'react-native'; 

const App: React.FC = () => { // FC = Function Component, App é do tipo React.FC
  return (
    <View style={styles.default}>
      <Text>Hello World!</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});