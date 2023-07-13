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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  user = auth.currentUser;
  return (
    <ContextProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ContextProvider>
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
