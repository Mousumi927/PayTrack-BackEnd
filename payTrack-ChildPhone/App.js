import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./home.jsx";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
    </View>
  );
};

export default App;
