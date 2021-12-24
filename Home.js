import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, View } from 'react-native';


export default function Home() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View>
            <Text>Hello React Native!</Text>
        </View>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
