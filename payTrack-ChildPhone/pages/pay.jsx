import React, { useState, useContext } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../config/Firebase.Config";
import { UserContext } from "../context/UserContext";
import HalfCreditCardTop from "../components/HalfCreditCardTop.jsx";

const Pay = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const userContext = useContext(UserContext);
  const [amount, setAmount] = useState("");

  const handlePay = async () => {
    let account = {};
    const q = query(
      collection(db, "children"),
      where("uid", "==", user.user.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      account = doc.data();
    });

    if (account?.chq && parseInt(account.chq) >= amount) {
      const dateTime = new Date().toISOString();
      const userId = userContext.user.user.uid;
      setDoc(doc(db, "transactions", `${userId}_${dateTime}`), {
        userId,
        amount: amount,
        type: "debit",
        dateTime,
        place: "Wallmart",
      });
      account.chq = (parseInt(account.chq) - amount).toString();
      setDoc(doc(db, "children", account.uid), account);
      navigation.navigate("Home");
    } else {
      Alert.alert("Not sufficient balance for this transaction.");
    }
  };

  return (
    <KeyboardAwareScrollView style={{ height: "100%" }}>
      <View style={styles.container}>
        <HalfCreditCardTop />
        <Text style={styles.amountText}>Amount</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter the amount"
          placeholderTextColor="#888"
          value={amount}
          onChangeText={setAmount}
        />

        <TouchableOpacity style={styles.payButton} onPress={handlePay}>
          <Text style={styles.payButtonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  scanBox: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 16,
    marginTop: 100,
  },
  amountText: {
    marginTop: 300,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  payButton: {
    width: "50%",
    height: 40,
    backgroundColor: "#5CD306",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  payButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Pay;
