// ReportLostItemPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

const ReportLostItemPage = () => {
  const [lostItem, setLostItem] = useState({
    image: '',
    name: '',
    block: '',
    location: '',
    date: '',
    time: '',
    description: '',
    contactNumber: '',
  });

  const handleUpload2 = async () => {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lostItem),
      });
      const data = await response.json();
      console.log('Successfully uploaded lost item:', data);
    } catch (error) {
      console.error('Failed to upload the lost item', error);
    }
  };
  

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setLostItem({ ...lostItem, image: result.uri });
    }
  };

  const handleDateChange = (value) => {
    const regex = /^[0-9/-]*$/;
    if (regex.test(value)) {
      setLostItem({ ...lostItem, date: value });
    } else {
      Alert.alert('Invalid Input', 'Please enter only numbers, dashes, and slashes for the date.');
    }
  };

  const handleTimeChange = (value) => {
    const regex = /^[0-9:]*$/;
    if (regex.test(value)) {
      setLostItem({ ...lostItem, time: value });
    } else {
      Alert.alert('Invalid Input', 'Please enter only numbers and colons for the time.');
    }
  };

  const handleContactNumberChange = (value) => {
    const regex = /^[0-9]*$/;
    if (regex.test(value)) {
      setLostItem({ ...lostItem, contactNumber: value });
    } else {
      Alert.alert('Invalid Input', 'Please enter only numbers for the contact number.');
    }
  };

  const handleUpload = async () => {
    try {
      const existingData = await AsyncStorage.getItem('lostItems');
      const newData = existingData ? JSON.parse(existingData) : [];
      newData.push(lostItem);
      await AsyncStorage.setItem('lostItems', JSON.stringify(newData));
      console.log('Uploading lost item:', lostItem);
      Alert.alert("Thank You for uploading", " You earned 200 points!!!   :)");
    } catch (error) {
      console.error('Failed to save the data to the storage', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Report Lost Item</Text>

      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        <Text style={styles.imagePickerText}>Tap to capture image of the lost item</Text>
      </TouchableOpacity>
      {lostItem.image ? (
        <Image source={{ uri: lostItem.image }} style={styles.image} />
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Name of the item"
        value={lostItem.name}
        onChangeText={(value) => setLostItem({ ...lostItem, name: value })}
      />

      <Picker
        selectedValue={lostItem.block}
        style={styles.picker}
        onValueChange={(itemValue) => setLostItem({ ...lostItem, block: itemValue })}
      >
        <Picker.Item label="Select Block" value="null" />
        <Picker.Item label="main campus" value="Block A" />
        <Picker.Item label="football ground" value="Block B" />
        <Picker.Item label="girls hostel blocks" value="Block C" />
        <Picker.Item label="workshops" value="Block D" />
        <Picker.Item label="it block 1" value="Block E" />
        <Picker.Item label="it block 2" value="Block F" />
        <Picker.Item label="phase 1 hostels" value="Block G" />
        <Picker.Item label="phase 2 hostels" value="Block H" />
        <Picker.Item label="phase 3 hostels" value="Block I" />
        <Picker.Item label="girls mess" value="Block J" />
        <Picker.Item label="convention center" value="Block J" />
        <Picker.Item label="library" value="Block J" />
        <Picker.Item label="club house gym" value="Block J" />
        <Picker.Item label="dorms gym" value="Block J" />
      </Picker>

      <TextInput
        style={styles.multilineInput}
        placeholder="Location of the item found"
        multiline
        numberOfLines={2}
        value={lostItem.location}
        onChangeText={(value) => setLostItem({ ...lostItem, location: value })}
      />

      <View style={styles.dateTimeContainer}>
        <TextInput
          style={[styles.input, styles.dateTimeInput]}
          placeholder="Date found"
          value={lostItem.date}
          onChangeText={handleDateChange}
          keyboardType="numbers-and-punctuation"
        />
        <TextInput
          style={[styles.input, styles.dateTimeInput]}
          placeholder="Time found"
          value={lostItem.time}
          onChangeText={handleTimeChange}
          keyboardType="numbers-and-punctuation"
        />
      </View>

      <TextInput
        style={styles.multilineInput}
        placeholder="Description of the person who found"
        multiline
        numberOfLines={7}
        value={lostItem.description}
        onChangeText={(value) => setLostItem({ ...lostItem, description: value })}
      />

      <TextInput
        style={styles.input}
        placeholder="Contact number of the finder"
        value={lostItem.contactNumber}
        onChangeText={handleContactNumberChange}
        keyboardType="phone-pad"
      />

      <Button title="Upload" onPress={handleUpload} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
  },
  multilineInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
    textAlignVertical: 'top',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateTimeInput: {
    flex: 1,
    marginRight: 10,
  },
  imagePicker: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePickerText: {
    color: 'gray',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'center',
  },
  picker: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default ReportLostItemPage;
