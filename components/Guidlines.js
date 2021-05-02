import React from "react";
import { Text, View, Image } from "react-native";
import { useDerivedValue } from "react-native-reanimated";
import styles from "../styles/Styles";

const Guidelines = ({ navigation, route }) => {
  const { exercise, guidelines, image,reps } = route.params;
  return (
    <View style={styles.guidelinesContainer}>
      <View >
        <Image style={styles.guidelinesImg} source={image} />
      </View>
      <Text style={styles.guidelinesTitle}>{exercise === 'PLANK' || exercise === "WALL SIT" ? reps+'s' : 'x'+reps} {exercise}</Text>
      <Text style={styles.guidelinesText}>{guidelines}</Text>
      <Text style={styles.btnStart} onPress={() => navigation.goBack()}>Done</Text>
    </View>
  );
};

export default Guidelines;
