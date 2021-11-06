import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, StyleSheet, Button} from 'react-native'; 



const Home: React.FC = () => { // FC = Function Component, App é do tipo React.FC
    /**
     * O Button é o componente nativo de cada plataforma
    */
    const navigation = useNavigation();
    const handleScreen = (screenName: any) => {
        navigation.navigate(screenName);
    }

  return (
    <View style={styles.default}>
        <Text>Home</Text>
        <Button title="See desconts" 
            onPress={() => handleScreen('List')}
        />
        <Button title="Contact" 
            onPress={() => handleScreen('Contact')}
        />
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