import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';


export default function Login() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{background:"#1b202c",height:'100vh'}}>
          <View>
            <Text style={{ fontFamily: 'Ubuntu_400Regular',color:"white"}}>Font is loaded</Text>
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
