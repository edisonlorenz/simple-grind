import React, { useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styles from "../styles/Styles";
import ListItem from "./ListItem";
const Progress = ({ navigation, route }) => {
  const [progress, setProgress] = useState([
    { id: 1, isFinish: false },
    { id: 2, isFinish: false },
    { id: 3, isFinish: false },
    { id: 4, isFinish: false },
    { id: 5, isFinish: false },
    { id: 6, isFinish: false },
    { id: 7, isFinish: false },
  ]);
  const exercise = route.params;

  return (
    <View style={styles.progressContainer}>
      <FlatList
        data={progress}
        renderItem={({ item }) => (
          <ListItem item={item} navigation={navigation} exercise={exercise} />
        )}
      />
    </View>
  );
};
export default Progress;
