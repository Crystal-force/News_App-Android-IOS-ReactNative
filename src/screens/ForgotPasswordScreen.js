import React, {useState} from 'react';
import axios from 'axios';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  ToastAndroid
} from 'react-native';
import { API_URL } from '../constants';


const img = require('../assets/login-bg.jpg')
const avater = require('../assets/login-avater.png')

export default function ForgotPasswordScreen(props) {

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "Whoops! Your email doesn't exist.",
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    );
  };

  const [state, setstate] = useState({
    email : "",
    password : ""
  });

  ResetPassword = (e) => {
    e.preventDefault();
    console.log('onsubmit', state)
    axios
      .post(API_URL + '/api/user-forgot', state)
      .then((response) => {
          if (response.data.success) {
              props.navigation.navigate('Login')
          } else {
            showToastWithGravity()
          }
       })
  }


  return (
    <View style={styles.container}>
       <ImageBackground source={img} style={styles.verifyimg}>
        <Text style={styles.logo}>
            LATITUD
        </Text>
        <Image  source={avater} style={styles.loginavater}/>

        <TextInput 
          style={styles.inputView}
          type="email"
          name="email"
          placeholder = "Email"
          value={state.email}
          onChangeText = {text => setstate({...state, email: text})}
        />
        
        <TextInput 
          style={styles.inputView}
          type="password"
          name="password"
          placeholder = "New Password"
          value={state.password}
          onChangeText = {text => setstate({...state, password: text})}
        />
     
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress = {ResetPassword}>Reset</Text>
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
    alignItems: 'center'
  },

  logo: {
    fontSize: 38,
    fontWeight: "bold",
    fontFamily: "Serif",
    marginBottom: 50,
    color: "white"
  },
  loginavater: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 20
  },
  verifyimg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  },
  inputView: {
    height: 40, 
    width: "85%", 
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 25,
    borderRadius:20,
    borderColor:"white",
    backgroundColor: "white"
  },

  forgot_button: {
    height: 30,
    marginTop: 10,
  },

  loginBtn: {
    width: "85%",
    borderRadius: 25,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#6C74E3",
    fontWeight: "600"
  },
  loginText: {
    color: "white",
    fontSize: 17
  }
});

