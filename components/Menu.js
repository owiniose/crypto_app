import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';




const Menu = () => {
  return (
    <View style={{
          position:"absolute",
          alignItems:"center",
          bottom:0,
    }}>
        <View style={{
            flex:1,
            flexDirection:'row',
            width: "100%",
            paddingBottom:15,
            paddingTop:10,
            justifyContent:'space-evenly',
            backgroundColor:"#232530",
            opacity:1,
            marginRight:70
  }}>

    <View style={styles.navMenu}>
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4eb4ff" width={30} height={30} >
  <Path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
</Svg>
    <Text style={{
      fontFamily:'KarlaMedium',
      fontSize:12,
      color:"#4eb4ff",
    }}    >Wallet</Text>
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4eb4ff" width={30} height={30} >
  <Path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
</Svg>

    </View>
    <View style={styles.navMenu} >
    <Ionicons name="compass-sharp" size={28} color="#B3B6B7" />
    <Text
    style={styles.text}
    >Explore</Text>
    </View>
    <View style={styles.navMenu} >
<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#B3B6B7" width={30} height={30}>
  <Path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
</Svg>    
<Text
    style={styles.text}    
    >Analytics</Text>
    </View  >
    <View style={styles.navMenu} >
    <Ionicons name="person-circle-outline" size={28} color="#B3B6B7" />         
    <Text
        style={styles.text}    
    >Profile</Text>

    </View>
         
        </View>
        
    </View>
    
  )
}

export default Menu

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'green',
        opacity:0.05,
        borderRadius: 25,
      },
      navMenu:{
        alignItems:'center'
      },
      text:{
        fontFamily:'KarlaMedium',
         fontSize:12,
         color:"#B3B6B7",
      }
})