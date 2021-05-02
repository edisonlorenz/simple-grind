import React from 'react';
import {Text, View,ImageBackground,TouchableOpacity } from 'react-native';
import styles from '../styles/Styles';

const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Exercise", {exercise: 'upper'})}>
          <View style={styles.menuItems}>
            <ImageBackground
              onPress={() => console.log("Upper")}
              source={require("../assets/img/upper.jpg")}
              style={styles.homeImage}
            >
              <Text style={styles.text}>Upper Body Workout</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Exercise", {exercise: 'abs'})}>
          <View style={styles.menuItems}>
            <ImageBackground
              source={require("../assets/img/abs.jpg")}
              style={styles.homeImage}
            >
              <Text style={styles.text}>Abdominal Workout</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Exercise",{exercise:'lower'})}>
          <View style={styles.menuItems}>
            <ImageBackground
              source={require("../assets/img/lower.jpg")}
              style={styles.homeImage}
            >
              <Text style={styles.text}>Lower Body Workout</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    );
}

export default HomeScreen;