import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';


export default function Home() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{background:"#fff",height:'100vh',padding:50}}>
          <View style={{alignItems:"center"}}>
            <Image
              style={{width:100,height:100,position:'relative',left:5}}
              source={{
                uri: require('./assets/logo.jpg'),
              }}
            ></Image>
            <Text style={{ fontFamily: 'Ubuntu_400Regular', fontSize: 15 ,color:"tomato"}}>Welcome to</Text>
            <Text style={{ fontFamily: 'Ubuntu_400Regular', fontSize: 40 ,color:"tomato", paddingBottom:"2vh"}}>Sports Mate</Text>
          </View>

            <Text style={styles.textStyle}>Email or Phone</Text>
          <View style={{alignItems:"center"}}>         
            <TextInput style={styles.inputfield}/>
          </View>

          <Text style={styles.textStyle}>Password</Text>

          <View style={{alignItems:"center"}}>  
            <TextInput style={styles.inputfield} secureTextEntry={true} />
            <TouchableOpacity style={{background:'tomato',width:'100%',alignItems:'center',padding:12,borderRadius:10}}>
              <Text style={{fontFamily: 'Ubuntu_400Regular',color:'white'}}>LOGIN</Text>
            </TouchableOpacity>
          </View>

          
          <View style={{alignItems:"center"}}> 
            <Image
              style={{width:150,height:150}}
              source={{
                uri: require('./assets/loading.gif'),
              }}
            ></Image>
            <Text style={{ fontFamily: 'Ubuntu_400Regular', fontSize: 12 }}>Loading...Please Wait</Text>

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
  textStyle : {
    fontFamily: 'Ubuntu_400Regular',
    justifyContent:'left',
    color:'grey',
    fontSize:12,
    marginTop:10
  },
  inputfield  : {height:50,borderRadius:5,marginTop:5,marginBottom:20,width:"100%",borderWidth:1,borderColor:'lightgrey',textIndent: "10px" }

});
