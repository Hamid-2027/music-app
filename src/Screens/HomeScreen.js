import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const HomeScreen = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Text>HomeScreen</Text>
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
export default HomeScreen;
