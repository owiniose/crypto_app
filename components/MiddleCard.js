import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MiddleCard = () => {
  return (
    <View style={{
        paddingHorizontal:30,
        paddingVertical:20,
        borderColor:'#AED6F1',
        marginTop:40,
        marginHorizontal:40,
        borderRadius: 25,
        borderWidth: 1,
        
    }}>
      <Text
        style={{
            color:'#B3B6B7',
            fontWeight:'600',
            fontSize:11
        }}      
      >Total Funds</Text>

      <View>
        <Text style={{
            color:'white',
            fontSize:32,
            fontWeight:'800',
            paddingBottom:10
        }}>
            $401,871.12</Text>
        </View>

      <Text
        style={{
            paddingBottom:4,
            color:'green',
            fontWeight:'800',
        }}
      >
        + 249.41 (5.50%)</Text>

      <Text
        style={{
            color:'#B3B6B7',
            fontWeight:'600',
            
        }}
      >
        
        vs previous week (20-27th Sep)</Text>
        <View style={styles.overlay} />

    </View>
  )
}

export default MiddleCard

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#A569BD',
        opacity:0.05,
        borderRadius: 25,
      }
})