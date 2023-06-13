import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProfileScreen from "./ProfilePage.jsx";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ProfileScreen />
    </View>
  );
};

export default App;
