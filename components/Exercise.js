import React, { useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styles from "../styles/Styles";
import ExerciseItem from "./ExerciseItem";
import Guidelines from "./Guidlines";
const Exercise = ({ navigation, route }) => {
  const exercise = route.params.exercise;

  const [upper, setUpper] = useState([
    {
      id: 1,
      exercise: "PUSH UP",
      reps: 12,
      guidelines: "Get down on all fours, placing your hands slightly wider than your shoulders.Straighten your arms and legs.Lower your body until your chest nearly touches the floor.Pause, then push yourself back up",
      link: require('../assets/img/pushup.gif'),
      isFinish: false,
    },
    {
      id: 2,
      exercise: "TRICEP DIPS",
      reps: 10,
      guidelines: "Lower yourself until your elbows are bent between 45 and 90 degrees.Slowly push yourself back up to the start position and repeat. Control the movement throughout the range of motion.",
      link: require('../assets/img/tricepdips.gif'),
      isFinish: false,
    },
    {
      id: 3,
      exercise: "PLANK TAPS",
      reps: 10,
      guidelines: "Start in high plank with your feet hip-distance apart. Tap your right hand to your left shoulder while engaging your core and glutes to keep your hips as still as possible. Then do the same with your left hand to your right shoulder.",
      link: require('../assets/img/planktap.gif'),
      isFinish: false,
    },
    {
      id: 4,
      exercise: "LATERAL PLANK WALKS",
      reps: 10,
      guidelines: "Simultaneously cross your right hand toward the left as you step your left foot out to the left. Then simultaneously step your left hand and right foot to the left, returning to the plank position. Your hands move together as your feet step apart. Take two more steps in this direction, keeping your abs pulled toward your spine and your pelvis level. This completes one rep.",
      link: require('../assets/img/plankwalks.gif'),
      isFinish: false,
    },
  ]);

  const [abs, setAbs] = useState([
    {
      id: 1,
      exercise: "CRUNCH KICKS",
      reps: 10,
      guidelines: "Lift your feet and upper body slighty off the ground. Engaged your abs as you bring you knees to you chest ang kick out",
      link: require('../assets/img/abs1.gif'),
      isFinish: false,
    },
    {
      id: 2,
      exercise: "V SIT-UPS",
      reps: 10,
      guidelines: "Touch your toes with your hands at the top of movement.Bend your knees for an easier option.",
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
      guidelines: "Squeeze you shoulder blades and enagage you core as you maintin a straight line with your whole body",
      link: require('../assets/img/plank.PNG'),
      isFinish: false,
    },
  ]);

  const [lower, setLower] = useState([
    {
      id: 1,
      exercise: "CURTSY LUNGES",
      reps: 16,
      guidelines: "Step back diagonally with one leg at a time into a rear lunge position.Engage you core and keep your upper body stright.",
      link: require('../assets/img/leg1.gif'),
      isFinish: false,
    },
    {
      id: 2,
      exercise: "PLIE SQUATS",
      reps: 8,
      guidelines: "Start with you feet wider than you hips and you toes and knees pointing outwards.With a straight back, bend you kness until you reach 90 degree angle.",
      link: require('../assets/img/leg2.gif'),
      isFinish: false,
    },
    {
      id: 3,
      exercise: "SIDE LEG RAISES",
      reps: 10,
      guidelines: "Stay in straight line to best work you buttock muscles with stacked hips and shoulders.Make it harder by holding you leg raised for a second before lowering.",
      link: require('../assets/img/leg3.gif'),
      isFinish: false,
    },
    {
      id: 4,
      exercise: "SIDE LEG LIFTS",
      reps: 10,
      guidelines: "Maintain a straight body throughout the movement.Flex you foot and press outwards through your heel.",
      link: require('../assets/img/leg4.gif'),
      isFinish: false,
    },
    {
      id: 5,
      exercise: "WALL SIT",
      reps: 10,
      guidelines: "Keep your legs shoulder width apart and a 90 degree angle on your knees.Push you feet towards the floor and you back against the wall.",
      link: require('../assets/img/wallsit.PNG'),
      isFinish: false,
    },
  ]);

  // Check the type of Exercise
  var typeOfExercise;
  if (exercise === "upper") {
    typeOfExercise = upper;
  }
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
