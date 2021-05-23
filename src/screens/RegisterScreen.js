import React, { useState } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
import { API_URL } from '../constants';
import { State } from 'react-native-gesture-handler';
const img = require('../assets/login-bg.jpg')
const avater = require('../assets/login-avater.png')


export default function RegisterScreen(props) {

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "Whoops! email already registered",
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    );
  };


  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  })

  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('onsubmit', state)
    axios
      .post(API_URL + '/api/user-signup', state)
      .then((response) => {
          if (response.data.success) {
            props.navigation.navigate('Register Verify');
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
        <Image source={avater} style={styles.loginavater} />
        <TextInput
          style={styles.inputView}
          type="name"
          name="name"
          placeholder="Name"
          value={state.name}
          onChangeText={text => setState({...state, name: text})}
        />
        <TextInput
          style={styles.inputView}
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChangeText={text => setState({...state, email: text})}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.inputView}
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChangeText={text => setState({...state, password: text})}
        />

        <TextInput
          keyboardType='numeric'
          style={styles.inputView}
          type="phone"
          name="phone"
          placeholder="Phone"
          value={state.phone}
          onChangeText={text => setState({...state, phone: text})}
        />

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={onSubmitHandler}>Register</Text>
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
    marginBottom: 20,
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
    borderRadius: 20,
    borderColor: "white",
    backgroundColor: "white"
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
  loginText: {
    color: "white",
    fontSize: 17
  }
});

