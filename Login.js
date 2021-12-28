import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { CheckBox } from 'react-native-web';
import React, { useState } from "react";


export default function Login() {
  const [isSelected, setSelection] = useState(false);
  const[userName, setUserName]= useState("");
  const[userEmail, setUserEmail]= useState("");
  const[userPassword, setUserPassword]= useState("");
  let email = ""


  // const validateEmail = (email) => {
  //   return String(email)
  //     .toLowerCase()
  //     .match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     );
  // };


 const getInput =(e)=>{
                          console.log("e",e)
                          email = email+e
                          // validateEmail(email)
                          // console.log("validateEmail",validateEmail(email))
                          setUserEmail(email)
                        }

 console.log("userName",userName)
 console.log("userEmail",userEmail)
 console.log("userPassword",userPassword)

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
        <Text style={{ fontFamily: 'Ubuntu_400Regular', fontSize: 15 ,color:"tomato"}}>Register At</Text>
        <Text style={{ fontFamily: 'Ubuntu_400Regular', fontSize: 40 ,color:"tomato", paddingBottom:"3vh"}}>Sports Mate</Text>
      </View>

      <Text style={styles.textStyle }>Name</Text>
      <View style={{alignItems:"center"}}>         
        <TextInput style={styles.inputfield}  onChangeText={setUserName} value={userName}/>
      </View>

        <Text style={styles.textStyle}>Email or Phone</Text>
      <View style={{alignItems:"center"}}>         
        <TextInput style={styles.inputfield}  onChangeText={getInput} value={userEmail}/>
      </View>

      <Text style={styles.textStyle}>Password</Text>



      <View style={{alignItems:"center"}}>  
        <TextInput style={styles.inputfield} secureTextEntry={true}  onChangeText={setUserPassword} value={userPassword}/>
       
        <View style={styles.checkboxContainer}>
        <CheckBox style={styles.checkbox} onValueChange={setSelection} value={isSelected}/>
        <Text style={styles.label}>I Agree to the terms</Text>
      </View>
  
        <TouchableOpacity style={{background:'tomato',width:'100%',alignItems:'center',padding:12,borderRadius:10}}>  
          <Text style={{fontFamily: 'Ubuntu_400Regular',color:'white'}}>Register</Text>
        </TouchableOpacity>
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
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignSelf: "left ",
    paddingRight:"7vh"
  },
  checkbox: {
    alignSelf: "center",
    paddingRight:"1vh"
  },
  textStyle : {
    fontFamily: 'Ubuntu_400Regular',
    justifyContent:'left',
    color:'grey',
    fontSize:12,
    marginTop:10
  },

  inputfield  : {
    height:50,
    borderRadius:5,
    marginTop:5,
    marginBottom:20,
    width:"100%",
    borderWidth:1,
    borderColor:'lightgrey',
    textIndent: "10px"
   }

});
