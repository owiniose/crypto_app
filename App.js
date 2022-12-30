import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import HomeHeader from './components/HomeHeader';
import MiddleCard from './components/MiddleCard';

export default function App() {
  return (
    <SafeAreaView style ={[tw`bg-gray-800`,styles.container]}>
      <HomeHeader/>
      <MiddleCard/>
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
