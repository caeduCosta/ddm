import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet,Image } from 'react-native';
import { auth } from '../../firebase'; // Importando a configuração do Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuário logado com sucesso');
      navigation.navigate('Chats'); // Redireciona para a página de chats
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{color:'white',fontSize:40,fontWeight:'bold'}}>CajuChat</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} // Senha oculta
        style={styles.input}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={handleLogin} color="#ff4d4d" />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Criar Conta"
          onPress={() => navigation.navigate('Cadastro')}
          color="#ff4d4d"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:  '#e57f6b',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image:{
    width:100,
    height:100,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 5,
  },
});

export default Login;
