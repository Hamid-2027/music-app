import React from "react";
import { Text, View, StyleSheet} from "react-native";

const MusicPlayer =()=>{


    return(
    <View style={styles.container}>
        {/* <Icon name ="heart-outline" size={30} /> */}
        <Text>
        MusicPlayer
        </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

  });
  
  // Export your screen component
  export default MusicPlayer;