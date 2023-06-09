import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./login.jsx";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <LoginScreen />
    </View>
  );
};

export default App;
