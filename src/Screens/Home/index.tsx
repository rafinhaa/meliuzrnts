import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, StyleSheet, Button, Image} from 'react-native'; 

const Home: React.FC = () => { // FC = Function Component, App é do tipo React.FC


  return (
    <View style={styles.default}>
      <Image source={require('../../Assets/Images/desconto.png')} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: '#c73434',
    alignItems: 'center',
    justifyContent: 'center',
  },
});