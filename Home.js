import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, View,Image } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';


export default function Home() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{background:"#1b202c",height:'100vh',padding:50}}>
          <View>
            <Image
              style={{width:100,height:100}}
              source={{
                uri: require('./assets/logo.png'),
              }}
            ></Image>
            <Text style={{ fontFamily: 'Ubuntu_400Regular', fontSize: 60 ,color:"white"}}>Welcome to <br/>Sports-Mate<br/></Text>
          </View>
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
