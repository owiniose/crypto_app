import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed';

const TradingView = ({ data }) => {

    const amount = 100 * data.current_price

    let decimal = Math.trunc(amount)

  return (
   
    <View style={{
            paddingTop:5,
            paddingLeft:20
    }}>
        <View style={{
            flexDirection:'row',
            paddingVertical: 10,
            paddingHorizontal: 20,
                    
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
                    height: 30,
                    width: 30,
                }}               
                />
            </View>

                <View style={{
                    flexDirection:'column',
                    alignSelf:'center',
                   marginLeft:10

                }} >


                <Text 
                style={{
                    color:"white",
                    fontWeight:'900',
                    fontSize: 15,
                    letterSpacing:1
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
                    marginRight:10,
                    fontSize:13,
                    letterSpacing:1
                }}
                >${data.current_price}</Text>

                <Text 
                style={{
                    color:"green",
                    fontSize:13,

                }}
                >{data.price_change_percentage_24h}</Text>
               </View>
               </View>
              


            <View style={{
                flex: 1,
                alignSelf:'center',
                alignContent:'flex-end',
                marginRight:15
                
            }} >
                <Text
                style={{
                    color:"white",
                    alignSelf:'flex-end',
                    fontWeight:'900',
                    fontSize: 15,
                    letterSpacing:1

                }}
                >{data.price_change_percentage_24h}</Text>
                <Text
                style={{
                    alignSelf:'flex-end',
                    color: '#B3B6B7',
                    
                    fontSize:13,
                    letterSpacing:1
                }}
                >{decimal}</Text>
                </View>
                
        </View>
      <Divider inset={true} color= "white" />
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