import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { auth } from "./config/Firebase.Config";
import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ContextProvider from "./context/ContextProvider";
import { useContext } from "react";
import { appContext } from "./context/ContextProvider";
import Tabs from "./navigation/Tabs";
import Login from "./components/Login";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Ask_money from "./pages/Ask_money";
import Pay from "./pages/Pay";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  user = auth.currentUser;
  return (
    <ContextProvider>
      <NavigationContainer>
        <Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login"
        >
          <Screen name="Login" component={Login} />
          {/* <Screen name="Tabs" component={Tabs} /> */}
          <Screen name="Home" component={Home} />
          <Screen name="Notifications" component={Notifications} />
          <Screen name="Profile" component={Profile} />

          {/* <Screen name="Ask_money" component={Ask_money} />
          <Screen name="Pay" component={Pay} />
          <Screen name="History" component={History} /> */}

          {/* {user ? <Tabs/>: <Login/>} */}
        </Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
