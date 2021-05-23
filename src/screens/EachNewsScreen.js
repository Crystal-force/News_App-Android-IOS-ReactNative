import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';

import { API_URL } from '../constants'

// const blogimg = require('../assets/business-woman.jpg')

export default function EachNewsScreen(props) {

   
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "News doesn't exist now.",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const NewsShowFunction = (id) => () => {
    axios
    .post(API_URL + "/api/news-detail", {id})
    .then((response) => {
      if (response.data) {
          props.navigation.navigate('News Detail', {data: response.data.data})
      } else {
        showToastWithGravity()
      }
    })
  }


  
  const RemoveContirm = () => {
    Alert.alert(
      "Remove",
      "Are you going to remove this news?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    )
  }

  const imgURL =API_URL + '/' + props.item.img;
  const id = props.item.id;

  return (
    <View style={styles.Blog}>
      <View style={styles.BlogImg}>
        <Image style={styles.EachImage}
          source={{uri:imgURL}}
        />
      </View>
      <View style={styles.BlogTitle}>
        <Text style={styles.EachTitle}>{props.item.title}</Text>
        <View style={styles.EditButton}>
          <Text style={styles.EachBtn} onPress={NewsShowFunction(id)}>View</Text>
          {/* <Text style={styles.EachBtn} onPress={() => Alert.alert('Simple Update Button pressed')}>Edit</Text> */}
          {/* <Text style={styles.EachBtn} onPress={RemoveContirm}>Remove</Text> */}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  EditButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginRight: 15
  },
  Blog: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
    width: "100%",
    borderColor: '#808080'
  },
  BlogImg: {
    flex: 1,
    alignItems: "center",
  },
  EachImage: {
    width: "70%",
    height: 70,
    borderRadius: 2
  },
  BlogTitle: {
    flex: 2
  },
  EachTitle: {
    marginLeft: 0,
    width: "95%",
  },
  EachBtn: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 3,
    color: "#2EB1EA",
    fontSize: 12
  },
});