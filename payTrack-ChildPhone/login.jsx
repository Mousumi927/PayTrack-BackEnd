import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'child1' && password === '123456') {
     
      Alert.alert('Login successful');
    } else {
      
      Alert.alert('Invalid username or password');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
      <TextInput
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
              style={{
                  borderWidth: 1,
                  borderColor: '#ccc',
                  padding: 10,
                  marginBottom: 10
        }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
      />
      <Button title="Submit" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
