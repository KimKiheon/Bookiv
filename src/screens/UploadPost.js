import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
const fullWidth = Dimensions.get('window').width;

export default function UploadPost(navigation) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.submitTab}>
        <TouchableOpacity>
          <Image
            style={styles.Ximage}
            source={require('../../image/Ximage.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>올리기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.uploadImage}>
        <TouchableOpacity
        // onPress={사진첩가서 골라온다.}
        >
          <Image
            style={styles.image}
            source={require('../../image/camera.png')}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.reviewInput}
          placeholder="평소 즐겨읽는 책의 리뷰를 남겨 사람들에게 공유해보세요!"
          placeholderTextColor={'#000000'}
        />
      </View>
        <View style={styles.container2}>
          <View style={styles.inputContainer}>
            <Image
              style={styles.image2}
              source={require('../../image/tag.png')}
            />
            <TextInput
              style={styles.contentsInput}
              placeholder="책 제목"
              placeholderTextColor={'#000000'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.image2}
              source={require('../../image/tag.png')}
            />
            <TextInput
              style={styles.contentsInput}
              placeholder="저자"
              placeholderTextColor={'#000000'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.image2}
              source={require('../../image/tag.png')}
            />
            <TextInput
              style={styles.contentsInput}
              placeholder="장르"
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //paddingVertical: 20,
    //paddingHorizontal: 20,
  },
  container2: {
    flex: 2,
    //backgroundColor: "red",
  },
  submitTab: {
    flex: 0.5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    //backgroundColor: "blue",
  },
  uploadImage: {
    paddingTop: 10,
    flex: 5,
    paddingLeft: 20,
    //backgroundColor: "black",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderWidth: 3,
    borderRadius: 10,
  },
  image2: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  Ximage: {
    resizeMode: "contain",

  },
  inputContainer: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: '#c2c2c2',
    width: fullWidth,
    //alignSelf: 'center',
    //justifyContent: 'center',
    //paddingVertical: 20,
    flexDirection: 'row',
    paddingLeft: 20,
  },
  contentsInput: {
    //width: fullWidth,
    //alignSelf: 'center',
    flex: 1,
    color: '#000000',
    paddingLeft: 10,
    //height: 25,
    //backgroundColor: "red",
  },
});
