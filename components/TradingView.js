import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed';

const TradingView = ({ data }) => {

    const amount = 100 * data.current_price

    let price = data.current_price

    const newprice = price.toLocaleString("en-US");

    let decimal = Math.trunc(amount)

  return (
   
    <View style={{
            paddingTop:5,
            paddingLeft:24
           
    }}>
        <View style={{
            flexDirection:'row',
            paddingVertical: 8,                    
        }}
        >

            <View style={{
                backgroundColor:'white',
                padding:10,
                borderRadius:10 
            }} >
                   
                    <Image
                source={data.image} 
                resizeMode="contain"
                style={{
                    height: 40,
                    width: 40,
                }}               
                />
            </View>

                <View style={{
                    flexDirection:'column',
                    alignSelf:'center',
                   marginLeft:8

                }} >


                <Text 
                style={{
                    color:"white",
                    fontFamily:'KarlaBold',
                    fontSize:16,
                }}
                >{data.name}</Text>

                

                <View
                style={{
                    flexDirection:'row',
                    alignSelf:'center',
                }}
                >
                <Text 
                style={{
                    color: '#B3B6B7',
                    marginRight:6,
                    fontFamily:'KarlaMedium',
                    fontSize:13,
                }}
                >${newprice}</Text>

                <Text 
                style={{
                    color:"green",
                    fontSize:13,
                    fontFamily:'KarlaBold',
                }}
                >{data.price_change_percentage_24h}</Text>
               </View>
               </View>
              


            <View style={{
                flex: 1,
                alignSelf:'center',
                alignContent:'flex-end',
                marginRight:24
                
            }} >
                <Text
                style={{
                    color:"white",
                    alignSelf:'flex-end',
                    fontFamily:'KarlaBold',
                    fontSize:16,

                }}
                >{data.price_change_percentage_24h}</Text>
                <Text
                style={{
                    alignSelf:'flex-end',
                    color: '#B3B6B7',
                    fontFamily:'KarlaMedium',
                fontSize:13,
                }}
                >${decimal}</Text>
                </View>
                
        </View>
      <Divider 
       color= "#B3B6B7" style={{
        opacity:0.3
       }} />
    </View>
    
    
  )
}

export default TradingView

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#A569BD',
        opacity:0.05,
        borderRadius: 25,
      }
})