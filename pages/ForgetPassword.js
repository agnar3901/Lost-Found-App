// ForgetPassword.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendEmail = () => {
    // This is a dummy function to simulate sending an email.
    console.log(`Sending email to ${email}`);
    alert('A recovery email has been sent to your email address.');
    // Navigate back to the login page after sending the email
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forget Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Send" onPress={handleSendEmail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
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
    width: '80%',
  },
});

export default ForgetPassword;
