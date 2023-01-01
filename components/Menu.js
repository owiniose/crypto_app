import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';



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
            paddingHorizontal:0,
            paddingBottom:30,
            paddingTop:8,
            justifyContent:'space-evenly',
            backgroundColor:"#17202A",
            opacity:0.98
        }}>

    <View style={styles.navMenu}>
    <Ionicons name="md-wallet-outline" size={28} color="#B3B6B7" />
    <Text style={{
        color:"#B3B6B7",
        fontWeight:'bold'
    }}>Wallet</Text>
    </View>
    <View style={styles.navMenu} >
    <Ionicons name="compass-sharp" size={28} color="#B3B6B7" />
    <Text
    style={{
        color:"#B3B6B7",
        fontWeight:'bold'
    }}
    >Explore</Text>
    </View>
    <View style={styles.navMenu} >
    <Ionicons name="bar-chart" size={28} color="#B3B6B7" />
    <Text
    style={{
        color:"#B3B6B7",
        fontWeight:'bold'
    }}
    >Analytics</Text>
    </View  >
    <View style={styles.navMenu} >
    <Ionicons name="person-circle-outline" size={28} color="#B3B6B7" />         
    <Text
        style={{
            color:"#B3B6B7",
            fontWeight:'bold'
        }}    
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
      }
})