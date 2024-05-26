import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberCredentials, setRememberCredentials] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://10.70.22.127:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigation.navigate('Welcome');
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Errors:', error);
      Alert.alert("incorrect email id or password", "Enter the correct credentials!!");
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
    navigation.navigate('ForgetPassword');
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login Page</Text>
        
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.switchContainer}>
          <Text>Remember Login ID and Password</Text>
          <Switch
            value={rememberCredentials}
            onValueChange={setRememberCredentials}
          />
        </View>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default LoginPage;
