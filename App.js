import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import Actions from './components/Actions';
import HomeHeader from './components/HomeHeader';
import MiddleCard from './components/MiddleCard';
import TradingView from './components/TradingView';
import { DATA } from './constants/data';
import { SAMPLE_DATA  } from './constants/sampledata';


export default function App() {
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
        
        zIndex:0,
        }} >
      <FlatList
         data={SAMPLE_DATA}
         showsHorizontalScrollIndicator={false}
         renderItem={({item}) => <TradingView data={item} />}
         keyExtractor ={(item) => item.id}
        />
      </View>
      <Text style={[tw`p-5`]}>
        Open up App.js to star  on your app!</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
