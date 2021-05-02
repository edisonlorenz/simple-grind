import React, { useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styles from "../styles/Styles";
import ExerciseItem from "./ExerciseItem";
import Guidelines from "./Guidlines";
const Exercise = ({ navigation, route }) => {
  const exercise = route.params.exercise;
  const [abs, setAbs] = useState([
    {
      id: 1,
      exercise: "CRUNCH KICKS",
      reps: 10,
      guidelines: "Lift your feet and upper body slighty off the ground",
      link: require('../assets/img/abs1.gif'),
      isFinish: false,
    },
    {
      id: 2,
      exercise: "V SIT-UPS",
      reps: 10,
      guidelines: "Lift your feet and upper body slighty off the ground",
      link: require('../assets/img/abs2.gif'),
      isFinish: false,
    },
    {
      id: 3,
      exercise: "CRUNCH",
      reps: 10,
      guidelines: "Lift your feet and upper body slighty off the ground",
      link: require('../assets/img/abs3.gif'),
      isFinish: false,
    },
    {
      id: 4,
      exercise: "PLANK",
      reps: 10,
      guidelines: "Lift your feet and upper body slighty off the ground",
      link: require('../assets/img/plank.PNG'),
      isFinish: false,
    },
  ]);

  const [lower, setLower] = useState([
    {
      id: 1,
      exercise: "CURTSY LUNGES",
      reps: 16,
      guidelines: "Lift your feet and upper body slighty off the ground",
      link: require('../assets/img/leg1.gif'),
      isFinish: false,
    },
    {
      id: 2,
      exercise: "PLIE SQUATS",
      reps: 8,
      guidelines: "Lift your feet and upper body slighty off the ground",
      link: require('../assets/img/leg2.gif'),
      isFinish: false,
    },
    {
      id: 3,
      exercise: "SIDE LEG RAISES",
      reps: 10,
      guidelines: "Lift your feet and upper body slighty off the ground",
      link: require('../assets/img/leg3.gif'),
      isFinish: false,
    },
    {
      id: 4,
      exercise: "SIDE LEG LIFTS",
      reps: 10,
      guidelines: "Lift your feet and upper body slighty off the ground",
      link: require('../assets/img/leg4.gif'),
      isFinish: false,
    },
    {
      id: 5,
      exercise: "WALL SIT",
      reps: 10,
      guidelines: "Lift your feet and upper body slighty off the ground",
      link: require('../assets/img/wallsit.PNG'),
      isFinish: false,
    },
  ]);

  // Check the type of Exercise
  var typeOfExercise;
  if (exercise === "abs") {
    typeOfExercise = abs;
  }
  if (exercise === "lower") {
    typeOfExercise = lower;
  }
  return (
    <View style={styles.progressContainer}>
      <FlatList
        data={typeOfExercise}
        renderItem={({ item }) => (
          <ExerciseItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};
export default Exercise;
