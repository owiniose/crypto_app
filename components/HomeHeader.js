import { View, StyleSheet,Text, SafeAreaView } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import Svg, { Path } from 'react-native-svg';



const HomeHeader = () => {
  return (
    <View style={{
      
    }}>
      <View style={styles.top}>
        <View style={styles.logo}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c2cdd9" height={25} width={25}  >
  <Path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
</Svg>

        <Text style={styles.left}>
            Chain
        </Text>
        </View>
        <View style={styles.right}>
        <EvilIcons name="search" size={30} color="#c2cdd9"  style={{
            marginRight:20,
  
        }} />
        
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c2cdd9" height={25} width={25} >
  <Path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd" />
</Svg>

        </View>
      </View>

      <View style={[tw``, styles.right]}>
       
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    logo: {
        flexDirection:'row',
        marginLeft:24, 
        alignItems:"center"    
       
    },
    left: {
        color:"white",
        fontFamily:"KarlaBold",
        fontSize:20,
       paddingLeft:3
    },
    right: {
        flexDirection: 'row',
        marginRight:24,
        alignItems:"center"         
    },
    top: {
        paddingTop:55,
        flexDirection: 'row',
        alignItems: 'center',
        width:"100%",
       justifyContent:'space-between',
    },

})


export default HomeHeader