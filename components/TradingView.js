import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TradingView = ({ data }) => {

    const amount = 100 * data.current_price

    let decimal = Math.trunc(amount)

  return (
    <View style={{
        backgroundColor: "black",
        marginHorizontal:2,
        borderRadius:20,
        
        
    }}>
        <View style={{
            flexDirection:'row',
            paddingVertical: 10,
            paddingHorizontal: 20,
            justifyContent:'space-between'
            
        }}
        >

            
                   
                    <Image
                source={data.image} 
                resizeMode="contain"
                style={{
                    height: 80,
                    width: 80,
                    
                }}               
                />
    

                <View style={{
                    flexDirection:'column',
                    alignSelf:'center',
                    marginRight:100

                }} >


                <Text 
                style={{
                    color:"white"
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
                    color:"white",
                    marginRight:10
                }}
                >{data.current_price}</Text>

                <Text 
                style={{
                    color:"green"
                }}
                >{data.price_change_percentage_24h}</Text>
               </View>
               </View>
              


            <View style={{
                alignSelf:'center',
                alignItems:'flex-end'
            }} >
                <Text
                style={{
                    color:"white"
                }}
                >{data.price_change_percentage_24h}</Text>
                <Text
                style={{
                    color:"white"
                }}
                >{decimal}</Text>
                </View>
        </View>

      <Text>TradingView</Text>
    </View>
  )
}

export default TradingView

const styles = StyleSheet.create({})