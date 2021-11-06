import React from 'react';
import {View, Text, StyleSheet} from 'react-native'; 

const Contact: React.FC = () => { // FC = Function Component, App é do tipo React.FC
  return (
    <View style={styles.default}>
      <Text>Contato</Text>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: '#c73434',
    alignItems: 'center',
    justifyContent: 'center',
  },
});