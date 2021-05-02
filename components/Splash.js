import React from "react";
import { Text, View, Image } from "react-native";
import { useDerivedValue } from "react-native-reanimated";
import styles from "../styles/Styles";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.splashContainer}>
      <View>
        <Text style={styles.logoText}>Simple Grind</Text>
        <Text style={styles.logoText}>Workout</Text>
        <View style={{ alignItems: "center", padding: 0, margin: 0 }}>
          <Image style={styles.logo} source={require('../assets/img/1.png')} />
        </View>
        <Text style={styles.flashTitle}>Energize you life!</Text>
        <Text style={styles.flashText}>
          If you want to be hit in life,
          <br />
          you gotta be fit and fine.
        </Text>

        <View style={{ alignItems: "center" }}>
          <Text
            onPress={() => navigation.navigate("Home")}
            style={styles.btnStart}
          >
            Get Started!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
