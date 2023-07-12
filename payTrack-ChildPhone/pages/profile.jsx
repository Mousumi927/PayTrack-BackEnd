import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

const Profile = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [school, setSchool] = useState('');
  const [currentLevel, setCurrentLevel] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.profileText}>Profile</Text>
        {/* <Image
          source={require('./images.jpeg')}
          style={styles.profileImage}
        /> */}
      </View>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your full name"
      />
      <Text style={styles.label}>DoB:</Text>
      <TextInput
        style={styles.input}
        value={dob}
        onChangeText={setDob}
        placeholder="Enter your date of birth"
      />

      <Text style={styles.label}>Gender:</Text>
      <TextInput
        style={styles.input}
        value={gender}
        onChangeText={setGender}
        placeholder="Enter your gender"
      />

      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your address"
      />

      <Text style={styles.label}>School:</Text>
      <TextInput
        style={styles.input}
        value={school}
        onChangeText={setSchool}
        placeholder="Enter your school"
      />

      <Text style={styles.label}>Current Level:</Text>
      <TextInput
        style={styles.input}
        value={currentLevel}
        onChangeText={setCurrentLevel}
        placeholder="Enter your current level"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Profile;