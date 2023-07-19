import { StyleSheet, View, Text, Animated, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HalfCreditCardTop = () => {
  const translateYAnimation = new Animated.Value(-100);
  const opacityAnimation = new Animated.Value(0);
  const navigation = useNavigation();

  const handleTap = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateYAnimation, {
          toValue: 0,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnimation, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(1500),
      Animated.parallel([
        Animated.timing(translateYAnimation, {
          toValue: -100,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnimation, {
          toValue: 0,
          duration: 1200,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      handleTap();
    });
  };

  useEffect(() => {
    handleTap();
  }, []);

  return (
    <View style={styles.halfCreditCardContainer}>
      <Animated.View
        style={[
          styles.halfCreditCard,
          {
            transform: [{ translateY: translateYAnimation }],
            opacity: opacityAnimation,
          },
        ]}
      >
        <View style={styles.textContainer}>
          <Text style={styles.bottomRightText}>Visa</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default HalfCreditCardTop;

const styles = StyleSheet.create({
  halfCreditCardContainer: {
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 2,
  },
  halfCreditCard: {
    width: "80%",
    aspectRatio: 2,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#5CD306",
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 8,
    borderTopLeftRadius: 10,
  },
  bottomRightText: {
    color: "#fff",
    fontSize: 32,
  },
});
