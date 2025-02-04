import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Mood, Saves, Statistics} from '../tab';

const Tab = createBottomTabNavigator();

const TabMenuNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Mood" component={Mood} />
      <Tab.Screen name="Saves" component={Saves} />
      <Tab.Screen name="Statistics" component={Statistics} />
    </Tab.Navigator>
  );
};

export default TabMenuNav;

const styles = StyleSheet.create({});
