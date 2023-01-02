import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import Actions from './components/Actions';
import HomeHeader from './components/HomeHeader';
import Menu from './components/Menu';
import MiddleCard from './components/MiddleCard';
import TradingView from './components/TradingView';
import { DATA } from './constants/data';
import { SAMPLE_DATA  } from './constants/sampledata';
import {BlurView} from 'expo-blur';
import { useFonts } from 'expo-font';



  const App = () => {

  const [loaded] = useFonts({
    KarlaMedium: require('./assets/fonts/Karla-Medium.ttf'),
    KarlaBold: require('./assets/fonts/Karla-Bold.ttf'),
    KarlaRegular: require('./assets/fonts/Karla-Medium.ttf'),
  });

  if(!loaded) return null;
  return (
    <SafeAreaView style ={[tw`bg-gray-800`,styles.container]}>
      <HomeHeader/>
      <MiddleCard/>
      <View style ={{zIndex:0}}>
       
        <FlatList
         data={DATA}
         horizontal={true}
         renderItem={({item}) => <Actions data={item} />}
         keyExtractor ={(item) => item.id}
         showsHorizontalScrollIndicator={false}
        />
       
      </View>
      <View  style ={{
        flex: 1,
        zIndex:0,
        backgroundColor:"#06080e",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop:16 
        }} >
      <FlatList
         data={SAMPLE_DATA}
         showsHorizontalScrollIndicator={false}
         renderItem={({item}) => <TradingView data={item} />}
         keyExtractor ={(item) => item.id}
        />
      </View>

      <BlurView intensity={90}>
        <View>
      <Menu/>
      </View>
      </BlurView>      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13141D"
  },
  header: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
