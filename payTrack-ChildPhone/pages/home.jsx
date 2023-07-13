import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Home = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('recentTransactions');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (activeTab === 'recentTransactions') {
      return (
        <View style={styles.recentTransactionsContainer}>
          <View style={styles.transactionTable}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Date</Text>
              <Text style={styles.tableHeader}>Place</Text>
              <Text style={styles.tableHeader}>Amount</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Jul 1, 2023</Text>
              <Text style={styles.tableCell}>Store 1</Text>
              <Text style={styles.tableCell}>$20</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Jul 2, 2023</Text>
              <Text style={styles.tableCell}>Store 2</Text>
              <Text style={styles.tableCell}>$30</Text>
            </View>
            {/* Add more transaction rows */}
          </View>
        </View>
      );
    }

    return (
      <View style={styles.chestLogoContainer}>
        <Image
          source={require('../images/chest-image.png')}
          style={styles.chestLogoImage}
        />
        <Text style={styles.amount}>Amount: 560</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.currentBalance}>Current Balance: $100</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Request')}>
          <Text style={styles.buttonText}>Request</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Pay')}>
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('History')}>
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'recentTransactions' && styles.activeTab,
          ]}
          onPress={() => handleTabPress('recentTransactions')}
        >
          <Text style={styles.tabText}>Recent Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'chest' && styles.activeTab]}
          onPress={() => handleTabPress('chest')}
        >
          <Text style={styles.tabText}>Chest</Text>
        </TouchableOpacity>
      </View>

      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  balanceContainer: {
    marginBottom: 20,
  },
  currentBalance: {
    fontSize: 24,
    fontWeight: 'bold',
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
    backgroundColor: 'lightpurple',
    borderRadius: 5,
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: 'purple',
  },
  tabText: {
    color: 'white',
    fontSize: 16,
  },
  recentTransactionsContainer: {
    alignItems: 'center',
  },
  transactionTable: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 20, // Increase the paddingHorizontal value for more spacing
  },
  tableHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tableCell: {
    fontSize: 16,
  },
  chestLogoContainer: {
    alignItems: 'center',
  },
  chestLogoImage: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  amount: {
    fontSize: 16,
  },
});

export default Home;
