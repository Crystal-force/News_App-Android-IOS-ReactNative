import React, { useState } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
}
  from 'react-native';
import { API_URL } from '../constants'

const img = require('../assets/menu_1.png')
const img_2 = require('../assets/menu_2.png')
const img_3 = require('../assets/menu_8.png')
const img_4 = require('../assets/menu_4.png')
const img_5 = require('../assets/menu_5.png')
const img_6 = require('../assets/menu_6.png')
const img_7 = require('../assets/menu_7.png')
const img_8 = require('../assets/help.gif')

export default function Home(props) {

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "News doesn't exist now.",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };


  const EachNewsList = (id) => () => {
    axios
      .post(API_URL + "/api/each-newslist", {id})
      .then((response) => {
        if (response.data) {
          const category = response.data;
          props.navigation.navigate('News List', {data: response.data.data, category, id})
        } 
        else{
          showToastWithGravity()
        }
      })
  };

  const Help = () => {
    props.navigation.navigate('Help')
  }

  return (
    
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.HomeTitle}>
                <Text style={styles.HomeText}>LATITUD</Text>
            </View>
            <View style={styles.MenuPage}>
            <View style={styles.MenuArea}>
              <TouchableOpacity
                style={styles.MenuList}
                onPress={EachNewsList(1)}>
                <Image style={styles.MenuImage}
                  source={img}
                />
                <Text style={styles.MenuText}>CIUDAD VALLES</Text>
              </TouchableOpacity>
              <View style={styles.Space}></View>
              <TouchableOpacity
                style={styles.MenuList}
                onPress={EachNewsList(2)}>
                <Image style={styles.MenuImage}
                  source={img_2}
                />
                <Text style={styles.MenuText}>SLP</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.MenuArea}>
              <TouchableOpacity
                style={styles.MenuList}
                onPress={EachNewsList(3)}>
                <Image style={styles.MenuImage}
                  source={img_3}
                />
                <Text style={styles.MenuText}>HUASTECA</Text>
              </TouchableOpacity>
              <View style={styles.Space}></View>
              <TouchableOpacity
                style={styles.MenuList}
                onPress={EachNewsList(4)}>
                <Image style={styles.MenuImage}
                  source={img_4}
                />
                <Text style={styles.MenuText}>RIO VERDE</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.MenuArea}>
              <TouchableOpacity
                style={styles.MenuList}
                onPress={EachNewsList(5)}>
                <Image style={styles.MenuImage}
                  source={img_6}
                />
                <Text style={styles.MenuText}>TAMAZUNCHALE</Text>
              </TouchableOpacity>
              <View style={styles.Space}></View>
              <TouchableOpacity
                style={styles.MenuList}
                onPress={EachNewsList(6)}>
                <Image style={styles.MenuImage}
                  source={img_5}
                />
                <Text style={styles.MenuText}>POLICIA</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.MenuArea}>
              <TouchableOpacity
                style={styles.MenuList}
                onPress={EachNewsList(7)}>
                <Image style={styles.MenuImage}
                  source={img_7}
                />
                <Text style={styles.MenuText}>DE TODO</Text>
              </TouchableOpacity>
              <View style={styles.Space}></View>
              <TouchableOpacity
                style={styles.MenuList}
                onPress={Help}
                >
                <Image style={styles.MenuImage}
                  source={img_8}
                 
                />
                <Text style={styles.MenuText}>HELP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  HomeTitle: {
    backgroundColor: "#0387E5",
    padding: 15,
  },
  HomeText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "monospace",
    fontWeight: "bold"
  },

  MenuPage: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20
  },
  Space: {
    width: "5%"
  },
  MenuList: {
    width: "40%",
    height: 140,
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#5A9FC7",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center'
  },
  MenuImage: {
    height: 70,
    width: 70,
    marginBottom: 10,
  },
  MenuArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  MenuText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
    color: "#5A9FC7"
  },
});