import React, { useState, useContext  } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Firebase.Config';
import { UserContext } from "../context/UserContext";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setUser(userCredential);
          navigation.navigate("Home");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert(errorMessage);
        });
    }
    catch (error) {
      Alert.alert("Error while loggin in " + error)
    }
};

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
      <TextInput
              placeholder="Username"
              value={email}
              onChangeText={(text) => setEmail(text)}
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

export default Login;
