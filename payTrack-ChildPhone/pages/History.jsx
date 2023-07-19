import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserContext } from "../context/UserContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/Firebase.Config";

const History = () => {
  // const transactionData = [
  //   { month: "January", requestAmount: 100, spendAmount: 80 },
  //   { month: "February", requestAmount: 150, spendAmount: 120 },
  //   // Add more transaction data objects here
  // ];
  const [recentTransactions, setRecentTransactions] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const groupByMonthResult = recentTransactions.reduce((acc, curr) => {
    // key should be name of month

    const month = new Date(curr.dateTime).toLocaleString("en-US", {
      month: "long",
    });

    if (acc[month]) {
      acc[month].spendAmount += +curr.amount;
    } else {
      acc[month] = {
        month,
        requestAmount: 200,
        spendAmount: +curr.amount,
      };
    }
    return acc;
  }, {});

  const transactionData = Object.values(groupByMonthResult);
  useEffect(() => {
    const fetchRecentTransaction = () => {
      const q = query(
        collection(db, "transactions"),
        where("userId", "==", user.user.uid)
      );
      getDocs(q)
        .then((querySnapshot) => {
          const transations = [];
          querySnapshot.forEach((doc) => {
            transations.push(doc.data());
          });
          setRecentTransactions(transations);
        })
        .catch((error) => {
          Alert.alert("Error fetching data from Firestore:", error);
        });
    };
    fetchRecentTransaction();
  }, []);
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
                $
                {calculateSavedAmount(
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
    fontWeight: "bold",
  },
  table: {
    borderWidth: 1,
    borderColor: "#000",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: "#000",
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  tableText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default History;
