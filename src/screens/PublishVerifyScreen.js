import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
import { Link } from '@react-navigation/native';

const img = require('../assets/bg-6.jpg')
const avater = require('../assets/newsverify.png')

export default function Login(props) {

  const ReturnPage = ()=> {
    props.navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.verifyimg}>
      <Image  source={avater} style={styles.loginavater}/>

        <Text style={styles.verifytitle}>
            Well done!
        </Text>
        <Text style={styles.verifycontent}>
            You just sent the publish request. please check your email.
        </Text>
        
        <TouchableOpacity style={styles.ReturnBtn}>
          <Text to="/Login" style={styles.returntext} onPress={ReturnPage}>Return</Text>
        </TouchableOpacity>
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
    marginBottom: 50
  },
  verifytitle: {
    fontSize: 18,
    fontFamily: "Cochin",
    marginBottom: 20,
    color: "#05A8EE",
    textAlign: "center"
  },
  verifycontent: {
     textAlign:"center",
     color:'#05A8EE',
     fontSize: 16,
     marginBottom: 30,
     paddingRight: 15,
     paddingLeft: 15
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
  },
  
  returntext: {
    fontSize: 16,
    color: 'white'
  }
});