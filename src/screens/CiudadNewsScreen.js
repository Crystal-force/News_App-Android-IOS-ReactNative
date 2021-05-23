import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import EachNewsScreen from '../screens/EachNewsScreen';


export default function CiudadNewsScreen(props) {
  const { data, category, id } = props.route.params;
  const AddNewsFunction = (id, userid) =>()=> {
    props.navigation.navigate('Add News', {id, userid})
  }

  const [state, setState] = useState({ list: [] });
  useEffect(() => {
    setState({ ...state, list: data })
  }, [])
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.HomeTitle}>
          <Text style={styles.HomeText}>{category.category.category}</Text>
      </View>
      <View style={styles.EachButton}>
        <TouchableOpacity style={styles.ButtonPart}>
          <Text style={styles.AddButton}
            onPress={AddNewsFunction(category.category.id, id)}
          >+ Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollView}>
        {
          state.list && state.list.length > 0 &&
          
          state.list.map((item, index) =>
            <EachNewsScreen key={index} item={item} {...props} />
          )
        }
      </View>
    </ScrollView>
  )
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
  EachButton: {
    alignItems: "flex-end",
    marginRight: 20,
    marginTop: -30
  },
  ButtonPart: {
    width: "30%",
    borderRadius: 20,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#0387E5",
  },
  AddButton: {
    color: "white",
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    width: "100%",
  }
});