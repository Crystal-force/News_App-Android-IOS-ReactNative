import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import { API_URL } from '../constants'

const newsimg = require('../assets/news/business-woman.jpg')



export default function NewsViewScreen(props) {
  const { data } = props.route.params;
  const CloseFunction = () => {
    props.navigation.goBack(null);
  }

  const imgUrl = API_URL + '/' + data.img


  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={styles.titlepart}>
            <Text style={styles.newstitle}>
                {data.title}
            </Text>
        </View>

        <View style={styles.imgpart}>
            <Image source={{uri:imgUrl}} style={styles.newsimg}/>
        </View>
        
        <View style={styles.contentpart}>
          <Text style={styles.newscontent}>
            {data.content}
          </Text>
        </View>

        <View style={styles.closebtnpart}>
        <TouchableOpacity style={styles.closebtn}>
            <Text style={styles.closebtntext} onPress={CloseFunction}>Close</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imgpart: {
    justifyContent: 'center',
    alignItems: "center"

  },
  newsimg: {
    width: "90%",
    height: 200
  },
  titlepart: {
    width: "100%",
    marginBottom: 15,
    marginTop: 10,
    alignItems: "center"
  },
  newstitle: {
    width: '95%',
    fontSize: 16,
    textAlign: 'center',
    color: "#00A2E8"
  },
  userinfopart: {
    marginBottom: 15,
    flexDirection: "row",
  },
  userinfo: {
    fontSize: 10,
    marginRight: 10,
    marginLeft: 20
  },
  contentpart: {
    marginTop: 20,
    marginLeft: 20,
    width: "90%",
    
  },
  newscontent: {
    textAlign: 'justify',
    lineHeight: 20,
  },
  closebtnpart: {
    justifyContent: 'center',
    alignItems: "flex-end",
    marginRight: 15,
    marginBottom: 32
  },
  closebtn: {
    width: "20%",
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#4651E9",
    fontWeight: "600",
  },
  closebtntext: {
    color:'white',
    fontSize: 13
  }
});

