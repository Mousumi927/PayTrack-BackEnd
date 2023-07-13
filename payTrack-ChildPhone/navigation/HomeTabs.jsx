import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Request from '../pages/Request';
import History from '../pages/History';
import Pay from '../pages/Pay';
import Home from '../pages/Home';

const HomeTabs = () => {
const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
            
        <Stack.Screen name="Request" component={Request} />
        <Stack.Screen name="Pay" component={Pay} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
  )
}

export default HomeTabs

const styles = StyleSheet.create({})