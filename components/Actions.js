import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Actions = ({data}) => {
  return (
    <View style={{
        marginVertical:25,  
        marginLeft:38,
        
    }}>
      <View style={{
        alignItems:'center',
        justifyContent:'space-around',
        marginRight:-10,
      }}>
      <MaterialCommunityIcons name={data.image} size={28} color="white" 
        style={{
          padding:15,
          backgroundColor:'#17202A',
          borderRadius:10,
          marginBottom:5
        }}
      />
      <Text style={{
        color:'white'
      }}>
        {data.title}
      </Text>
      </View>

      

    </View>
  )
}

export default Actions

const styles = StyleSheet.create({


})