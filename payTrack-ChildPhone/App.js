import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserProvider, UserContext } from "./context/UserContext";
import { Alert } from "react-native";
import Tabs from "./navigation/Tabs";

const Stack = createNativeStackNavigator();
export default function App() {
  const userContext = useContext(UserContext);
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={userContext?.user ? "Home" : "Login"}
        >
          <Stack.Screen name="Home">{() => <Tabs />}</Stack.Screen>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
