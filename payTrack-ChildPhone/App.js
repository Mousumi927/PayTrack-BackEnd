import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./home.jsx";
import LoginScreen from "./login.jsx";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
      <LoginScreen />
    </View>
  );
};

export default App;
