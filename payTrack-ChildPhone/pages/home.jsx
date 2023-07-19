import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/Firebase.Config";
import { UserContext } from "../context/UserContext";
import { useNavigationState } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const navigationState = useNavigationState((state) => state);
  const { user, setUser } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState("recentTransactions");
  const [currentBalance, setCurrentBalance] = useState(0);
  const [recentTransactions, setRecentTransactions] = useState([]);

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };
  const handleLogout = async () => {
    try {
      setUser(null);
      navigation.navigate("Login");
    } catch (error) {
      alert("Error " + error);
    }
  };

  const renderContent = () => {
    if (activeTab === "recentTransactions") {
      return (
        <View style={styles.recentTransactionsContainer}>
          <View style={styles.transactionTable}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Date</Text>
              <Text style={styles.tableHeader}>Place</Text>
              <Text style={styles.tableHeader}>Amount</Text>
            </View>
            {recentTransactions.map((item, index) => (
              <View style={styles.tableRow} key={item.userId + item.dateTime}>
                <Text style={styles.tableCell}>
                  {new Date(item.dateTime).toISOString().split("T")[0]}
                </Text>
                <Text style={styles.tableCell}>{item.place}</Text>
                <Text style={styles.tableCell}>{item.amount}</Text>
              </View>
            ))}
          </View>
        </View>
      );
    }

    return (
      <View style={styles.chestLogoContainer}>
        <Image
          source={require("../images/chest-image.png")}
          style={styles.chestLogoImage}
        />
        <Text style={styles.amount}>Amount: 560</Text>
      </View>
    );
  };

  const fetchCurrentBalance = async () => {
    let account = {};
    const q = query(
      collection(db, "children"),
      where("uid", "==", user.user.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      account = doc.data();
    });
    setCurrentBalance(account.chq);
  };

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

  useEffect(() => {
    fetchRecentTransaction();
    fetchCurrentBalance();
  }, [navigationState, recentTransactions, currentBalance]);

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.currentBalance}>
          Current Balance:{currentBalance}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Request")}
        >
          <Text style={styles.buttonText}>Request</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Pay")}
        >
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("History")}
        >
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "recentTransactions" && styles.activeTab,
          ]}
          onPress={() => handleTabPress("recentTransactions")}
        >
          <Text style={styles.tabText}>Recent Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "chest" && styles.activeTab]}
          onPress={() => handleTabPress("chest")}
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
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  balanceContainer: {
    marginBottom: 20,
  },
  currentBalance: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "blue",
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  activeTab: {
    backgroundColor: "purple",
  },
  inActiveTab: {
    backgroundColor: "lightpurple",
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  tabText: {
    color: "white",
    fontSize: 16,
  },
  recentTransactionsContainer: {
    alignItems: "center",
    width: "100%",
  },
  transactionTable: {
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
    marginTop: 10,
    width: "100%",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 20, // Increase the paddingHorizontal value for more spacing
  },
  tableHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tableCell: {
    fontSize: 16,
    justifyContent: "space-between",
    borderWidth: "1px",
    borderColor: "red",
  },
  chestLogoContainer: {
    alignItems: "center",
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
