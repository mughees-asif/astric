import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  View, Image
} from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";
import firebase from "firebase";

import materialTheme from '../constants/Theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Signup extends React.Component {

  constructor(props) {
    super(props);

    this.state = ({
      firstname: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: ''
    })
  }

  signupUser = (email, password) => {

    if (this.state.password.length < 8) {
      alert("Please enter at least 8 charaters for password");
      return;
    }

    if (this.state.password != this.state.confirmPassword) {
      alert("Please enter matching password and confirm password");
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  render() {
    return (
        <Block style={styles.signup} flex center>

          <Block row style={{width: windowWidth}}>
            <View style={styles.leftContainer}>
              <Text style={styles.labelText}>FIRST NAME:*</Text>
              <TextInput style={styles.textInputHalf} onChangeText={(firstname) => this.setState({firstname})} />
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.labelText}>SURNAME:*</Text>
              <TextInput style={styles.textInputHalf} onChangeText={(surname) => this.setState({surname})} />
            </View>
          </Block>

          <Block row style={{width: windowWidth}}>
            <View style={styles.leftContainer}>
              <Text style={styles.labelText}>EMAIL ADDRESS:*</Text>
              <TextInput style={styles.textInput} onChangeText={(email) => this.setState({email})} />
            </View>
          </Block>


          <Block row style={{width: windowWidth}}>
            <View style={styles.leftContainer}>
              <Text style={styles.labelText}>PASSWORD:* <Text style={{fontSize:windowHeight > 812 ? 16 : 10, color: materialTheme.COLORS.PLACEHOLDER}} >(MINIMUM 8 CHARACTERS)</Text></Text>
              <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={(password) => this.setState({password})} />
            </View>
          </Block>


          <Block row style={{width: windowWidth}}>
            <View style={styles.leftContainer}>
              <Text style={styles.labelText}>CONFIRM PASSWORD:*</Text>
              <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={(confirmPassword) => this.setState({confirmPassword})} />
            </View>
          </Block>


          <Block row style={{width: windowWidth}}>
            <View style={styles.leftContainer}>
              <Text style={styles.labelText}>PHONE NUMBER:*</Text>
              <TextInput style={styles.textInput} onChangeText={(phone) => this.setState({phone})}  />
            </View>
          </Block>


          <Block row style={{width: windowWidth}}>
            <View style={styles.leftContainer}>
              <Text style={styles.labelText}>INSERT PROFILE PICTURE:</Text>
            </View>
          </Block>
          <Block style={{width: windowWidth, marginLeft: 30, marginTop: 10}}>
            <TouchableOpacity style={{height: 55}} onPress={() => {navigation.navigate(title)}}>
              <Image source={require('../assets/icons/profilePhoto.png')} style={styles.profileImage} />
            </TouchableOpacity>
          </Block>

          <Block>
            <TouchableOpacity onPress={() => this.signupUser(this.state.email, this.state.password)}>
              <Block center style={styles.signupButton}>
                <Text style={styles.signupButtonText}>SIGNUP</Text>
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
    );
  }
}

const styles = StyleSheet.create({
  signup: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'white',
    paddingTop: 100
  },
  signupButton: {
    height: windowHeight*0.075,
    width: windowWidth-32 ,
    color: theme.COLORS.WHITE,
    backgroundColor: materialTheme.COLORS.LOGO_A,
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center'
  },
  signupButtonText: {
    color: theme.COLORS.WHITE,
    fontFamily: materialTheme.FONTS.SANCHEZ,
    fontSize: windowHeight > 812? 32 : 18
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  labelText: {
    color: materialTheme.COLORS.LOGO_S,
    fontFamily: materialTheme.FONTS.SANCHEZ,
    marginHorizontal: 16,
    fontSize: windowHeight > 812? 32 : 18,
    width: windowWidth
  },
  textInput: {
    width: windowWidth - 32,
    backgroundColor: materialTheme.COLORS.MENU_BACKGROUND,
    height: windowHeight*0.05,
    color: theme.COLORS.BLACK,
    fontWeight: 'bold',
    fontSize: windowHeight > 812? 32 : 18,
    marginHorizontal: 16,
    padding: 10,
    marginBottom: 20,
  },
  textInputHalf: {
    width: (windowWidth-32)*0.45,
    backgroundColor: materialTheme.COLORS.MENU_BACKGROUND,
    height: windowHeight*0.05,
    color: theme.COLORS.BLACK,
    fontWeight: 'bold',
    fontSize: windowHeight > 812? 32 : 18,
    marginHorizontal: 16,
    padding: 10,
    marginBottom: 20,
  },
  leftContainer: {
    width: windowWidth*0.45,
    justifyContent: 'flex-start',
    marginRight: windowHeight > 812 ? windowWidth*0.075 : windowWidth*0.05
  },
  rightContainer: {
    width: windowWidth*0.45,
    justifyContent: 'flex-end',
  },
  rows: {
    height: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE / 2,
  },
  profileImage: {
    height: windowWidth*0.3,
    width: windowWidth*0.3,
    aspectRatio: 1,
  },
});
