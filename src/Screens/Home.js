import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MusicLibrary from './MusicLibrary';

const Home = () => {
    const Tab = createMaterialTopTabNavigator();
  return (
      <View>
      <Text style={{fontSize:33, color: 'black' , border:3}}>Hello</Text>
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{ tabBarLabel: 'Home' }}
      />
    
      <Tab.Screen
        name="Profile"
        component={MusicLibrary}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
    </View>
  );
};

// Styles for your components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

// Export your screen component
export default Home;
