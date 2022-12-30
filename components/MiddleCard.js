import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MiddleCard = () => {
  return (
    <View style={{
        padding: 40,
        backgroundColor:'#5B6AEA',
        marginTop:40,
        marginHorizontal:40,
        borderRadius: 15,
        opacity:0.2
    }}>
      <Text>Total Funds</Text>

      <View>
        <Text style={{
            color:'white',
            fontSize:30,
            fontWeight: '600',
            
        }}
        >$401,871.12</Text>
        </View>

      <Text> + 249.41 (5.50%)</Text>

      <Text>vs previous week (20-27th Sep)</Text>

    </View>
  )
}

export default MiddleCard

const styles = StyleSheet.create({})