import React from 'react';
import {View, Text, StyleSheet} from 'react-native'; 

const List: React.FC = () => { // FC = Function Component, App é do tipo React.FC
  return (
    <View style={styles.default}>
      <Text>List</Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: '#c73434',
    alignItems: 'center',
    justifyContent: 'center',
  },
});