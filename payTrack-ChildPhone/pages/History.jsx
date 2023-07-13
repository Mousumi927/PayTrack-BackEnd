import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const History = () => {
  const transactionData = [
    { month: 'January', requestAmount: 100, spendAmount: 80 },
    { month: 'February', requestAmount: 150, spendAmount: 120 },
    // Add more transaction data objects here
  ];

  const calculateSavedAmount = (requestAmount, spendAmount) => {
    return requestAmount - spendAmount;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Transaction History</Text>
      </View>

      <View style={styles.table}>
        {/* Table Header */}
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={styles.tableHeaderText}>Months</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.tableHeaderText}>Request</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.tableHeaderText}>Spend</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.tableHeaderText}>Saved</Text>
          </View>
        </View>

        {/* Table Rows */}
        {transactionData.map((transaction, index) => (
          <View style={styles.tableRow} key={index}>
            <View style={styles.tableCell}>
              <Text style={styles.tableText}>{transaction.month}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableText}>${transaction.requestAmount}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableText}>${transaction.spendAmount}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableText}>
                ${calculateSavedAmount(
                  transaction.requestAmount,
                  transaction.spendAmount
                )}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default History;
