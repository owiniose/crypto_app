import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SVImage from '../assets/svgs/image.svg'

const Actions = ({data}) => {

  const xml = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="500px" height="500px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">
...
</svg>
`;

  return (
    <View style={{
        marginVertical:24,  
        marginLeft:24,
        
    }}>
      <View style={{
        alignItems:'center',
        justifyContent:'space-around',
       
      }}>
      <MaterialCommunityIcons name={data.image} size={28} color="white" 
        style={{
          padding:18,
          backgroundColor:'#232530',
          borderRadius:15,
          marginBottom:5,
        }}
      />
{/* <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke="red" width={20} height={20}>
  <Path fill-rule="evenodd" d={data.d} clip-rule="nonzero" />
</Svg> */}



       


      <Text style={{
        fontFamily:'KarlaBold',
        fontSize:13,
        color:'white',
        paddingTop:2
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