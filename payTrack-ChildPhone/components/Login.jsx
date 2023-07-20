import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase.Config";
import { UserContext } from "../context/UserContext";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setUser(userCredential);
          navigation.navigate("Tabs");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert(errorMessage);
        });
    } catch (error) {
      Alert.alert("Error while loggin in " + error);
    }
  };

  return (
    <KeyboardAwareScrollView style={{ height: "100%" }}>
      <View
        style={{
          height: Dimensions.get("window").height,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 20,
          backgroundColor: "white",
        }}
      >
        <Image
          style={{ width: 300, height: 300, resizeMode: "contain" }}
          source={require("../assets/logoWithName.png")}
        />
        <TextInput
          placeholder="Username"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 25,
            paddingLeft: 15,
            padding: 10,
            marginBottom: 10,
            width: "90%",
          }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            paddingLeft: 15,
            borderRadius: 25,
            marginBottom: 10,
            width: "90%",
          }}
        />
        <TouchableOpacity
          onPress={handleLogin}
          style={{
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#5CD306",
            height: 40,
            borderRadius: 25,
          }}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
