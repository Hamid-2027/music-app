import React from "react";
import { Text, View, StyleSheet} from "react-native";
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon from "react-native-vector-icons/Ionicons"

const MusicPlayer =()=>{


    return(
    <View style={styles.container}>
      <View style={styles.iconV}>

        <Icon2 name ="like1" size={20} />
        <Icon name ="heart-outline" size={20} />
        <Icon2 name ="like2" size={20} />
      </View>
     
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    
    },
    iconV:{
      flexDirection:'row',
      justifyContent:"space-around",
      alignItems:'center',
      borderWidth:1,

    }

  });
  
  // Export your screen component
  export default MusicPlayer;