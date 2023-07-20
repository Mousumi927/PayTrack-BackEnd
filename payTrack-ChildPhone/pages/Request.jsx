import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { UserContext } from "../context/UserContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/Firebase.Config";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Request = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const [amount, setAmount] = useState("");
  const [parent, setParent] = useState("mom");

  const handleRequest = async () => {
    try {
      const dateTime = new Date().toISOString();
      const userId = user.user.uid;
      setDoc(doc(db, "requests", `${userId}_${dateTime}`), {
        userId,
        amount: parseInt(amount, 10),
        dateTime,
        isSeen: false,
      });
      navigation.navigate("Home");
    } catch (error) {
      console.log("Error while requesting " + error);
    }
  };
  return (
    <KeyboardAwareScrollView style={{ height: "100%" }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {parent === "mom" ? (
            <Image source={require("../images/Mom.png")} style={styles.image} />
          ) : (
            <Image
              source={require("../images/Dad.jpeg")}
              style={styles.image}
            />
          )}
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={parent === "mom" ? styles.activeTabLeft : styles.tab}
            onPress={() => setParent("mom")}
          >
            <Text style={styles.tabText}>Mom</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={parent === "dad" ? styles.activeTabRight : styles.tab}
            onPress={() => setParent("dad")}
          >
            <Text style={styles.tabText}>Dad</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Enter the amount"
          placeholderTextColor="#888"
          value={amount.toString()}
          onChangeText={setAmount}
        />

        <View style={styles.boxesContainer}>
          <TouchableOpacity style={styles.box} onPress={() => setAmount(10)}>
            <Text style={styles.boxText}>$10</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => setAmount(20)}>
            <Text style={styles.boxText}>$20</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => setAmount(30)}>
            <Text style={styles.boxText}>$30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => setAmount(40)}>
            <Text style={styles.boxText}>$40</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRequest}>
          <Text style={styles.buttonText}>Request</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 700,
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  imageContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  image: {
    borderWidth: 2,
    borderColor: "#5CD306",
    width: 150,
    height: 150,
    borderRadius: 75,
    marginRight: 16,
    marginTop: 80,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
    marginTop: 60,
  },
  boxesContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  box: {
    flex: 1,
    height: 40,
    backgroundColor: "#5CD306",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
  },
  boxText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    width: "50%",
    height: 40,
    backgroundColor: "#5CD306",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "green",
    borderRadius: 25,
    marginBottom: 10,
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
});

export default Request;
