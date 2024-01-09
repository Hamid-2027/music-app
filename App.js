
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Home from './src/Screens/Home';
import MusicLibrary from './src/Screens/MusicLibrary';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
function App() {
  
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  const Stack = createStackNavigator();


   return (


   <NavigationContainer>
     <Stack.Navigator
     initialRouteName="Settings"
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
         title: 'Awesome app',
       }}
     />
    
     <Stack.Screen
       name="Settings"
       component={MusicLibrary}
       options={{
         gestureEnabled: false,
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
