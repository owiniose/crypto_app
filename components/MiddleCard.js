import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';



const MiddleCard = () => {
  return (
    
    <View style={{
        paddingVertical:16,
        paddingHorizontal:24,
        borderColor:'#4eb4ff',
        marginTop:16,
        marginHorizontal:24,
        borderRadius: 25,
        borderWidth: 1,
    }}>

      
      <Text
        style={{
            fontFamily:'KarlaMedium',
            color:'#c2cdd9',
            fontWeight:'600',
            fontSize:13,
            paddingBottom:4,
        }}      
      >Total Funds</Text>

      <View style={{
        flexDirection:"row",
        alignItems:"center"
      }}>
        <Text style={{
            fontFamily:'KarlaBold',
            color:'white',
            fontSize:32,
            paddingBottom:12
        }}>
            $401,871.12</Text>

            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c2cdd9" width={20} height={20}
            style={{
              marginBottom:10,
              marginLeft:5
            }}
            >
  <Path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
</Svg>

        </View>

      <Text
        style={{
            paddingBottom:4,
            color:'#7bf898',
            fontFamily:'KarlaBold',
            fontSize:16
        }}
      >
        + 249.41 (5.50%)</Text>

      <Text
        style={{
            color:'#c2cdd9',
            fontFamily:'KarlaMedium',
            fontSize:13,            
        }}
      >
        
        vs previous week (20-27th Sep)</Text>

        <LinearGradient 
        start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} 
        colors={[ '#4eb4ff' , '#9364f5', 'transparent']} 
        style={styles.overlay} />
    </View>
    
    
  )
}

export default MiddleCard

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        opacity:0.1,
        borderRadius: 25,
      }
})