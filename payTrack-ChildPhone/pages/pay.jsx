import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Pay = () => {
  const [amount, setAmount] = useState('');

  const handlePay = () => {
    //  payment logic here
    console.log(`Payment of $${amount} processed`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.scanBox} />

      <Text style={styles.amountText}>Amount</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter the amount"
        placeholderTextColor="#888"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.payButton} onPress={handlePay}>
        <Text style={styles.payButtonText}>Pay</Text>
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
  scanBox: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 16,
  },
  amountText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
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
  payButton: {
    width: '50%',
    height: 40,
    backgroundColor: '#65a9e8',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Pay;
