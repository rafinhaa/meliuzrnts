import React from 'react';
import {
  View, 
  Text, 
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native'; 


const Contact: React.FC = () => { // FC = Function Component, App é do tipo React.FC
  
  return (
    <View style={styles.default}>
      <Text>Contato</Text>
      <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#FFF" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#FFF" />
      <TextInput 
        style={styles.input} 
        multiline={true} 
        placeholder="Assunto" 
        placeholderTextColor="#FFF"
        keyboardType="email-address"  
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => { console.log( 'aqui'  )}}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
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
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: 20,
    marginTop: 30,
    borderRadius: 7,
    width: Dimensions.get('window').width - 30
  },
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});