// ListLostItemsPage.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ListLostItemsPage = () => {
  const [lostItems, setLostItems] = useState([]);

  useEffect(() => {
    const fetchedLostItems = [
      {
        id: 1,
        name: 'Keys',
        location: 'Main street, New York',
        date: '2024-05-25',
        time: '10:30 AM',
        description: 'A set of house keys with a red keychain.',
        contactNumber: '123-456-7890',
      },
      {
        id: 2,
        name: 'Wallet',
        location: 'Central Park, New York',
        date: '2024-05-24',
        time: '2:00 PM',
        description: 'A black leather wallet containing cards and cash.',
        contactNumber: '987-654-3210',
      },
      {
        id: 2,
        name: 'Wallet',
        location: 'Central Park, New York',
        date: '2024-05-24',
        time: '2:00 PM',
        description: 'A black leather wallet containing cards and cash.',
        contactNumber: '987-654-3210',
      },
      {
        id: 2,
        name: 'Wallet',
        location: 'Central Park, New York',
        date: '2024-05-24',
        time: '2:00 PM',
        description: 'A black leather wallet containing cards and cash.',
        contactNumber: '987-654-3210',
      },
      {
        id: 2,
        name: 'Wallet',
        location: 'Central Park, New York',
        date: '2024-05-24',
        time: '2:00 PM',
        description: 'A black leather wallet containing cards and cash.',
        contactNumber: '987-654-3210',
      },
      {
        id: 2,
        name: 'Wallet',
        location: 'Central Park, New York',
        date: '2024-05-24',
        time: '2:00 PM',
        description: 'A black leather wallet containing cards and cash.',
        contactNumber: '987-654-3210',
      },
    ];

    setLostItems(fetchedLostItems);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>List of Lost Items</Text>
      {lostItems.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemName}>Name: {item.name}</Text>
          <Text style={styles.itemDetails}>Location: {item.location}</Text>
          <Text style={styles.itemDetails}>Date: {item.date}</Text>
          <Text style={styles.itemDetails}>Time: {item.time}</Text>
          <Text style={styles.itemDetails}>Description: {item.description}</Text>
          <Text style={styles.itemDetails}>Contact Number: {item.contactNumber}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#dbdbdb',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDetails: {
    fontSize: 16,
    marginBottom: 3,
  },
});

export default ListLostItemsPage;
