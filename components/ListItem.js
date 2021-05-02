import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import styles from "../styles/Styles";
const ListItem = ({ exercise,item,navigation }) => {
   
  return (
    <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('Exercise',{exercise: exercise.exercise})}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>Day {item.id}</Text>
        <Text style={styles.listItemText}>
          {item.isFinish ? (
            <Icon name="check" type="font-awesome" color="green" />
          ) : (
            null
          )}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default ListItem;
