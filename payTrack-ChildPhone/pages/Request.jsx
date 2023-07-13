import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const Request = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Request Money</Text>

      <View style={styles.imageContainer}>
        <Image
          source={require('../images/Mom.png')}
          style={styles.image}
        />
        <Image
          source={require('../images/Dad.jpeg')}
          style={styles.image}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter the amount"
        placeholderTextColor="#888"
      />

      <View style={styles.boxesContainer}>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>$10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>$20</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>$30</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>$40</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Request</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginRight: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  boxesContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  box: {
    flex: 1,
    height: 40,
    backgroundColor: '#65a9e8',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  boxText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    width: '50%',
    height: 40,
    backgroundColor: '#65a9e8',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Request;
