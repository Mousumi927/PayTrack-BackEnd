import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  FlatList,
} from "react-native";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
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
        <View style={styles.transactionsView}>
           <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Date</Text>
              <Text style={styles.tableHeader}>Place</Text>
              <Text style={styles.tableHeader}>Amount</Text>
            </View>
        <FlatList
        horizontal={false}
        data={recentTransactions}
        renderItem={({item, index})=>(
          <View style={styles.recentTransactionsContainer}>
          <View style={styles.transactionTable}>
           
            
              <View style={styles.tableRow} key={item.userId + item.dateTime}>
                <Text style={styles.tableCell}>
                  {new Date(item.dateTime).toISOString().split("T")[0]}
                </Text>
                <Text style={styles.tableCell}>{item.place}</Text>
                <Text style={styles.tableCell}>{item.amount}</Text>
              </View>
            
          </View>
        </View>

      )}
        keyExtractor={this.index}
        /></View>
       
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
      where("userId", "==", user.user.uid),
      orderBy("dateTime", "desc")
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
    console.log("hello");

    fetchRecentTransaction();
    fetchCurrentBalance();
  }, [navigationState]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/Logo.png")} />

      <View style={styles.balanceContainer}>
        <Text style={styles.currentBalance}>
          Current Balance : ${currentBalance}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Request Money")}
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
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={
            activeTab === "recentTransactions"
              ? styles.activeTabLeft
              : styles.tab
          }
          onPress={() => handleTabPress("recentTransactions")}
        >
          <Text style={styles.tabText}>Recent Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={activeTab === "chest" ? styles.activeTabRight : styles.tab}
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
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  logo: { width: 150, height: 150, resizeMode: "contain", marginBottom: 20 },
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
    backgroundColor: "#5CD306",
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "green",
    borderRadius: 25,
    marginBottom: 10,
    width: "80%",
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  activeTabLeft: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#5CD306",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  activeTabRight: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#5CD306",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  tabText: {
    color: "white",
    fontSize: 16,
  },
  recentTransactionsContainer: {
    alignItems: "center",
    // height: 50,
  },
  transactionTable: {
    borderBottomWidth: 0.5,
    borderColor: "#888",
    borderRadius: 5,
    // marginTop: 10,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 35,
    alignItems: "center"
  },
  tableHeader: {
    width: "100%",
    fontSize: 20,
    width: 120,
    fontWeight: "bold",
    // borderWidth: 1,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  tableCell: {
    fontSize: 18,
    textAlign: "center",
    width: 120,
    // borderWidth: 1,
    paddingHorizontal: 10,
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
    fontWeight: "bold",
  },
  transactionsView: {
    marginTop: 10,
    borderWidth: 1,
    height: 400,
    borderRadius: 25,
    width: "98%",
    marginLeft: "1%",
    borderColor: "#0066FF",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});

export default Home;
