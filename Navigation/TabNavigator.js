import React from 'react';
import { StyleSheet} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import science from '../Screens/ScienceScreen';
import maths from '../Screens/MathsScreen';

const Tab=createMaterialBottomTabNavigator()

const BottomTabNavigator=()=>{
  return(
    <Tab.Navigator
    barStyle={styles.bottomTabStyle}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "maths") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "science") {
          iconName = focused ? "flask" : "flask-filled";
        }
        return (
          <Ionicons
            name={iconName}
            size={25}
            color={color}
            style={styles.icons}
          />
        );
      }
    })}
    activeColor={"#ee8249"}
    inactiveColor={"gray"}
  >
    <Tab.Screen name="maths" component={maths}/>
    <Tab.Screen name="science" component={science}/>
</Tab.Navigator>
  );
}
const styles=StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#2f345d",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
      },
      icons: {
        width: 30,
        height: 30
      }
})
export default BottomTabNavigator;