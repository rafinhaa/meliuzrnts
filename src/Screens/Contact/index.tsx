import React, { useEffect, useState } from 'react';
import {
  View, 
  Text, 
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native'; 

import axios from 'axios';
import { useSelector } from 'react-redux';
import { IRootStore } from '../../Store';

const Contact: React.FC = () => { // FC = Function Component, App é do tipo React.FC
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sendForm, setSendForm] = useState(false);
  const cupom = useSelector(({GlobalCupom}: IRootStore) => GlobalCupom.cupom); // Usa o valor que está dentro do estado do redux

  const handleSubmit = () => {
    if (!name.trim()) {
      Alert.alert('Please enter your name');
      return;
    }
    if (!email.trim()) {
      Alert.alert('Please enter your e-mail');
      return;
    }
    if (!phone.trim()) {
      Alert.alert('Please enter your phone number');
      return;
    }
    if (!message.trim()) {
      Alert.alert('Please enter a message');
      return;
    }
    axios.post('https://webhook.site/9afc9f48-34b0-4959-9750-535a56bbc67d', {
      name,
      email,
      phone,
      message,
    }).then(() => {
      Alert.alert('Form successfully sent!');
      setSendForm(true);
    }).catch(() => {
      Alert.alert('Error sending form');
    });
    setSendForm(!sendForm);
  };
  function clearInputs() {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  }

  useEffect(() => {
    clearInputs();
  }, [sendForm]);

  return (
      <View style={styles.default}>
        <Text>Send a Message!</Text>
        <Text>{cupom}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="name"
          keyboardType="default"
          maxLength={100}
          placeholderTextColor="#FFF"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="e-mail"
          keyboardType="email-address"
          autoCorrect={false}
          maxLength={50}
          placeholderTextColor="#FFF"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPhone}
          value={phone}
          placeholder="phone"
          keyboardType="phone-pad"
          maxLength={11}
          placeholderTextColor="#FFF"
        />
        <TextInput
          style={styles.inputMessage}
          onChangeText={setMessage}
          value={message}
          placeholder="message"
          keyboardType="default"
          multiline={true}
          numberOfLines={10}
          maxLength={500}
          placeholderTextColor="#FFF"
        />
        <Text>Remaining chars: {500 - message.length}</Text>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleSubmit()}>
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
  inputMessage: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    height: 200,
    width: Dimensions.get('window').width - 30,
    marginTop: 20,
    padding: 20,
    borderRadius: 7,
  },
});