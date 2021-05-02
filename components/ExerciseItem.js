import React, { useState } from "react";
import { Image } from "react-native";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import styles from "../styles/Styles";
const ExerciseItem = ({ item, navigation }) => {
    const lastExercise = item.exercise;
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate("Guidlines",{id: item.id,exercise: item.exercise, image: item.link, guidelines: item.guidelines, reps:item.reps}) }
    >
      <View style={styles.listItemView}>
        <View>
          <Text style={styles.listItemText}>{item.exercise}</Text>
          <Text style={styles.listItemReps}>{lastExercise === 'PLANK' || lastExercise === "WALL SIT" ? item.reps+'s' : 'x'+item.reps}</Text>
          <Text style={styles.listItemText}>
          {item.isFinish ? (
            <Icon name="check" type="font-awesome" color="green" />
          ) : (
            null
          )}
        </Text>
        </View>

        <Image style={styles.exerciseMenuImg} source={item.link} />
      </View>
    </TouchableOpacity>
  );
};
export default ExerciseItem;
