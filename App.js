
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Home from './src/Screens/Home';
import HomeScreen from './src/Screens/HomeScreen';
import SecondScreen from './src/Screens/SecondScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
function App() {
  
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  const Stack = createStackNavigator();


   return (


   <NavigationContainer key="main">
     <Stack.Navigator
     initialRouteName="Home"
     screenOptions={{
       headerMode: 'screen',
       headerTintColor: 'white',
       headerStyle: { backgroundColor: 'tomato' },
     }}
   >
     <Stack.Screen
       name="Home"
       component={Home}
       options={{
         headerShown:false
       }}
     />
     <Stack.Screen
       name="Home2"
       component={HomeScreen}
       options={{
         headerShown:false
       }}
     />
     <Stack.Screen
       name="Home3"
       component={SecondScreen}
       options={{
         headerShown:false
       }}
     />
    
    
   </Stack.Navigator>
    </NavigationContainer>
   );
 }
 

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: "orange",
  },
 
});

export default App;
