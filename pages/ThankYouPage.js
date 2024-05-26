import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ThankYouPage = ({ navigation }) => {
  const handleReturn = () => {
    // Navigate back to the previous screen or any other screen as needed
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank You!</Text>
      <Text style={styles.message}>Your item has been successfully uploaded.</Text>
      <Button title="Return to Previous Screen" onPress={handleReturn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ThankYouPage;
