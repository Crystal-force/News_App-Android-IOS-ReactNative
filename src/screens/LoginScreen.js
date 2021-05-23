import React,{ useState } from 'react';
import axios from 'axios';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ToastAndroid
} from 'react-native';
import { API_URL } from '../constants'




import { Link } from '@react-navigation/native';
const img = require('../assets/login-bg.jpg')
const avater = require('../assets/login-avater.png')

export default function Login(props) {

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "Unable to login. Email or Password doesn't exist.",
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    );
  };


  const [state, setState] = useState({
      email: "",
      password:"",
  });
  
 
  LoginSubmit = (e) => {
    e.preventDefault();
    console.log('onsubmit', state)
    axios
      .post(API_URL + "/api/user-login", state)
      .then((response) => {
          console.log(response.data)
          if (response.data.success) {
            props.navigation.replace('Home')
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
          type = "email"
          name = "email"
          placeholder = "Email"
          value={state.name}
          onChangeText={text => setState({...state, email: text})}
        />
        
        <TextInput 
          style={styles.inputView}
          type = "password"
          name = "password"
          placeholder = "Password"
          value={state.password}
          onChangeText={text => setState({...state, password: text})}
          secureTextEntry={true}
        />
         
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={LoginSubmit}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.RegisterBtn}>
          <Link to="/Register" style={styles.loginText}>Register</Link>
        </TouchableOpacity>

        <TouchableOpacity>
          <Link to="/ForgotPassword" style={styles.forgot_button} >Forgot Password?</Link>
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
  verifyimg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  },

  logo: {
    fontSize: 38,
    fontWeight: "bold",
    fontFamily: "Cochin",
    marginBottom: 20,
    color: 'white'
  },
  loginavater: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 20
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
    color:'white'
  },

  loginBtn: {
    width: "85%",
    borderRadius: 25,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#6EDF70",
    fontWeight: "600",
  },
  RegisterBtn: {
    width: "85%",
    borderRadius: 25,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "#D5A7DD",
  },
  loginText: {
    color: "white",
    fontSize: 17
  }
});