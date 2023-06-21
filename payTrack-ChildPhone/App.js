import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./home.jsx";
import LoginScreen from "./login.jsx";
import RequestMoneyScreen from "./ask_money.jsx";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
      <LoginScreen />
      <RequestMoneyScreen />
    </View>
  );
};

export default App;
