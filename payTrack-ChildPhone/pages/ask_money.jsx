import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { Center } from "@builderx/utils";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialButtonShare from "../components/MaterialButtonShare";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <Center horizontal>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.logo}
        ></TouchableOpacity>
      </Center>
      <MaterialIconTextButtonsFooter
        icon1Name="timer"
        btn1Text="Recent"
        activeIconName="heart"
        activeContent="Favorites"
        icon2Name="map-marker-radius"
        icon1="home-outline"
        btn1Text="HOME"
        activeIcon="bell"
        activeContent="Notifications"
        icon2="account-circle"
        style={styles.materialIconTextButtonsFooter}
      ></MaterialIconTextButtonsFooter>
      <Text style={styles.requestMoney}>Request Money</Text>
      <Image
        source={require("../assets/images/HowIMineForFish.jpeg")}
        resizeMode="contain"
        style={styles.parent1}
      ></Image>
      <Image
        source={require("../assets/images/HowIMineForFish.jpeg")}
        resizeMode="contain"
        style={styles.parent2}
      ></Image>
      <TouchableOpacity style={styles.enterAmount}></TouchableOpacity>
      <Center horizontal>
        <TouchableOpacity style={styles.sendRequest}></TouchableOpacity>
      </Center>
      <TouchableOpacity style={styles.button}>
        <MaterialButtonShare style={styles.$5}></MaterialButtonShare>
        <MaterialButtonShare style={styles.$10}></MaterialButtonShare>
        <MaterialButtonShare style={styles.$15}></MaterialButtonShare>
        <MaterialButtonShare style={styles.$20}></MaterialButtonShare>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,0)",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  logo: {
    width: 120,
    height: 120,
    backgroundColor: "#E6E6E6",
    padding: 10,
    margin: 70,
    top: 0,
    overflow: "visible"
  },
  materialIconTextButtonsFooter: {
    height: 63,
    width: 375,
    position: "absolute",
    left: 20,
    top: 805,
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    backgroundColor: "rgba(15,15, 15,0.2)"
  },
  requestMoney: {
    top: 230,
    left: 70,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 40,
    textAlign: "center"
  },
  parent1: {
    top: 308,
    left: 49,
    width: 130,
    height: 126,
    position: "absolute",
    borderRadius: 100,
    backgroundColor: "rgba(0,0,0,1)"
  },
  parent2: {
    top: 308,
    left: 232,
    width: 130,
    height: 126,
    position: "absolute",
    borderRadius: 100,
    backgroundColor: "rgba(15,15, 15,1)"
  },
  enterAmount: {
    top: 477,
    width: 194,
    height: 64,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
    left: 110
  },
  sendRequest: {
    top: 705,
    width: 194,
    height: 64,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 20
  },
  button: {
    top: 583,
    width: 360,
    height: 82,
    position: "absolute",
    flexDirection: "row",
    left: 29,
    flexWrap: "nowrap",
    justifyContent: "space-around",
    backgroundColor: "rgba(15,15, 15,0)",
    alignItems: "center"
  },
  $5: {
    height: 56,
    width: 56,
    margin: 10
  },
  $10: {
    height: 56,
    width: 56,
    margin: 10
  },
  $15: {
    height: 56,
    width: 56,
    margin: 10
  },
  $20: {
    height: 56,
    width: 56,
    margin: 10
  }
});

export default RequestMoneyScreen;
