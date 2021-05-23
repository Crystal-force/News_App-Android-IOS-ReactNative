import React, { useState }  from 'react';
import axios from 'axios';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { API_URL } from '../constants'


  const UselessTextInput = (props) => {
    return (
      <TextInput
        placeholder = "content"
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
       
      />
    );
  }

export default function AddNews(props) {
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "Whoops! News doesn't publish.",
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    );
  };

  const [value, onChangeText] = React.useState();
  const [singleFile, setSingleFile] = useState(null);
  const [state, setState] = useState({
    title: "",
    content: "",
  })
 
    const selectFile = async () => {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });
        // console.log('res : ' + JSON.stringify(res));
        setSingleFile(res);
      } catch (err) {
        setSingleFile(null);
        if (DocumentPicker.isCancel(err)) {
          alert('Canceled');
        } else {
          alert('Unknown Error: ' + JSON.stringify(err));
          throw err;
        }
      }
    }


    const uploadImage = async () => {
      if (singleFile != null) {
        const fileToUpload = singleFile;
        const {title, content} = state;
        const {id, userid} = props.route.params;

        const data = new FormData();
        data.append('file', fileToUpload);
        data.append('categoryid', id);
        data.append('userid', userid);
        data.append('title', title);
        data.append('content', content);
        console.log(data);
        axios
        .post("http://latitudslp.com/api/upload-file", data)
          .then((response) => {
              console.log(response.data)
              if (response.data.success) {
                  props.navigation.replace('Pubish News')
              } else {
                showToastWithGravity()
              }
          })
        }
      //   let responseJson = await res.json();
      //   console.log(responseJson);
      //   if (responseJson.status == 1) {
      //     alert('Upload Successful');
      //   }
      // } else {
      //   // If no file selected the show alert
      //   alert('Please Select File first');
      // }
    }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.AddMainPage}>
        <View style={styles.AddBlog}>
          <TextInput style={styles.NewsInput}
            type="title"
            name="title"
            value={state.name}
            onChangeText={text => setState({...state, title: text})}
            placeholder = "title"
          />
        </View>

        <View>
          <View style={styles.FileInfo}>
            {singleFile != null ? (
              <Text style={styles.textStyle}>
                Name:  {singleFile.name ? singleFile.name : ''}
                {'\n'}
                Type:  {singleFile.type ? singleFile.type : ''}
                {'\n'}
                Size:  {singleFile.size ? singleFile.size : ''}
              </Text>
            ): null}
          </View>

          <TouchableOpacity
            style={styles.SelectFilebutton}
            activeOpacity={0.5}
            onPress={selectFile}>
            <Text style={styles.SelectFileText}>Select File...</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ContentBlog}>
          <UselessTextInput
            multiline
            numberOfLines={4}
            type="content"
            name="content"
            value={state.content}
            onChangeText={text => setState({...state, content: text})}
            value={value}
            style={styles.textpart}
          />
        </View>
        
        <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={uploadImage}>
            <Text style={styles.buttonTextStyle}>Publish News</Text>
          </TouchableOpacity>

        {/* <View style={styles.AddBtnPart}>
          <TouchableOpacity style={styles.AddBtn}>
            <Text style={styles.AddText} onPress={PublishNews}>Publish News</Text>
          </TouchableOpacity>  
        </View> */}
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  AddMainPage: {
    flex:1,
    width: "100%"
  },
  AddBlog: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },  
  NewsInput: {
    width: "90%",
    borderRadius: 3,
    paddingLeft: 10,
    paddingHorizontal: 10,
    fontSize: 14,
    borderBottomWidth:1,
    borderColor: "#D9D9D9",
    
  },
  ContentBlog: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 14,
  },
  textpart: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: "90%"
  },

  NewsContent: {
    width: "90%",
    fontSize: 15,
    backgroundColor:'white',
    borderWidth:1,
    borderColor: "#D9D9D9",
    margin:10,
    borderRadius: 3,
    paddingLeft: 10,
    justifyContent: "flex-start",
    height: 150
  },
  AddBtnPart: {
    flexDirection: "row",
    justifyContent: "center",
  },
  AddBtn: {
    width: "70%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#5A9FC7",
    fontWeight: "600"
  },
  AddText: {
    color:"white"
  },
  textarea: {
    paddingRight: 20,
    paddingLeft: 20
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  SelectFilebutton: {
    backgroundColor: 'white',
    borderWidth: 0,
    color: '#307ecc',
    borderColor: '#307ecc',
    borderWidth: 1,
    // height: 30,
    alignItems: 'center',
    borderRadius: 3,
    marginLeft: 15,
    marginRight:250,
    marginTop: 15,
  },
  SelectFileText: {
    color: '#307ecc',
    paddingVertical: 10,
    fontSize: 16,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  FileInfo: {
    marginLeft: 20,
    marginTop: 15
  },
  textStyle: {
    color: "#048FCC"
  }
});