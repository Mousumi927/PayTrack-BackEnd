import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('achievements');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const renderLogo = () => {
    if (activeTab === 'achievements') {
      return <Text style={styles.logo}>Achievements Logo</Text>;
    } else if (activeTab === 'chest') {
      return (
        <View style={styles.chestLogoContainer}>
          <Text style={styles.chestLogo}>Chest Logo</Text>
          <Text style={styles.amount}>Amount: 560</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.currentBalance}>Current Balance : 100</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ask Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'achievements' && styles.activeTab,
          ]}
          onPress={() => handleTabPress('achievements')}
        >
          <Text style={styles.tabText}>Achievements</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'chest' && styles.activeTab]}
          onPress={() => handleTabPress('chest')}
        >
          <Text style={styles.tabText}>Chest</Text>
        </TouchableOpacity>
      </View>

      {renderLogo()}
    </View>
  );
};

const styles = StyleSheet.create({
  currentBalance: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: 'blue',
  },
  tabText: {
    color: 'white',
    fontSize: 16,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chestLogoContainer: {
    alignItems: 'center',
  },
  chestLogo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  amount: {
    fontSize: 16,
  },
});

export default HomeScreen;
