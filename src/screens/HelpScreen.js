import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image
} from 'react-native';


const img = require('../assets/help.jpg')
const avater = require('../assets/logo-1.png')

export default function Login(props) {
  
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.verifyimg}>
      <Image  source={avater} style={styles.loginavater}/>

        <Text style={styles.verifytitle}>
            About
        </Text>
        <Text style={styles.verifycontent}>
            ....................................................
        </Text>
       
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#76E2DA'
  },
  loginavater: {
    width: 80,
    height: 80,
    marginBottom: 20
  },
  verifytitle: {
    fontSize: 28,
    fontFamily: "Cochin",
    marginBottom: 20,
    color: "white",
  },
  verifycontent: {
     color:'white',
     fontSize: 16,
     marginBottom: 30,
     paddingRight: 25,
     paddingLeft: 25
  },
  returnlogin_btn: {
    height: 30,
    marginTop: 10,
    borderWidth: 1,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop:5,
    borderRadius: 15,
    borderColor: 'white',
    color:'white'
  },
  verifyimg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  
  returntext: {
    fontSize: 16,
    color: 'white'
  }
});