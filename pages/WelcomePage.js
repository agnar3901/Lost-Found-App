// WelcomePage.js
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const WelcomePage = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to{'\n'} Lost and Found App</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.subtitle}>About the App</Text>
        <Text style={styles.description}>
        The Lost and Found app is a digital hub for reuniting lost items with their owners. 
        With its user-friendly interface, users can report lost items detailing descriptions and 
        locations. {'\n'}{'\n'}Additionally, it offers features like notifications 
        for matching items and secure messaging for communication.{'\n'}{'\n'} Whether it's a misplaced phone or a forgotten bag, 
        the Lost and Found app streamlines the process of retrieval, fostering a community dedicated to helping one another.
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Report Lost Item" onPress={() => navigation.navigate('ReportLostItem')} />
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Button title="List Lost Items" onPress={() => navigation.navigate('ListLostItems')} />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    marginLeft:44,
    textAlign: 'center',
  },
  logo:{
    width: 50,
    height: 50,
    marginRight: 10,
  },
  descriptionContainer: {
    marginBottom: 20,
    width: '100%',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  description: {
    textAlign: 'left',
    fontSize:17,
  },
  buttonsContainer: {
    width: '100%',
  },
  text: {
    marginBottom: 14,
    marginTop: 10,
    textAlign: 'left',
    fontSize: 17,
  },
});

export default WelcomePage;
