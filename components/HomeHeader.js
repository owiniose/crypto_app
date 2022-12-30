import { View, StyleSheet,Text, SafeAreaView } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';


const HomeHeader = () => {
  return (
    <View>
      <View style={styles.top}>
        <Text style={styles.left}>
            Chain
        </Text>
        <View style={styles.right}>
        <EvilIcons name="search" size={30} color="grey"  style={{
            marginRight:20,
            color:"white",
        }} />
        
        <Ionicons name="notifications-outline" size={24} color="black"
            style={{
                color:"white", 
            }}        
        />
        </View>
      </View>

      <View style={[tw``, styles.right]}>
       
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    left: {
        color:"white",
        fontWeight:'bold',
        fontSize:20,
        marginLeft:30
    },
    right: {
        flexDirection: 'row',
        marginRight:50
        
    },
    top: {
        paddingTop:35,
        flexDirection: 'row',
        alignItems: 'center',
       width:"100%",
       justifyContent:'space-between',
    },

})


export default HomeHeader