import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Notification from '../pages/Notifications';
import Profile from '../pages/Profile';
import Icon from "react-native-vector-icons/FontAwesome5";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#0066FF",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home" size={25} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="bell" size={25} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="Profile" size={25} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  //  styles for the bottom navigation bar
});
