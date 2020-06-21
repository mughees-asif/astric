import React from 'react';
import {
  StyleSheet,
  Switch,
  FlatList,
  Platform,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput
} from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";
import firebase from "firebase";

import materialTheme from '../constants/Theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = ({
      email: '',
      password: ''
    })
  }

  loginUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
      console.log(user);
     }
    )
  }

  render() {
    const {navigation} = this.props;
    const sendResetPasswordEmail = () => {}
    return (
        <Block style={styles.loginpage} flex center>
          <Text style={styles.labelText}>EMAIL ADDRESS / PHONE NUMBER:</Text>
          <TextInput style={styles.textInput} onChangeText={(email) => this.setState({email})} />

          <Text style={styles.labelText}>PASSWORD:</Text>
          <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={(password) => this.setState({password})} />

          <TouchableOpacity onPress={() => this.loginUser(this.state.email, this.state.password)}>
            <Block center style={styles.login}>
              <Text style={styles.loginText}>LOGIN</Text>
            </Block>
          </TouchableOpacity>

          <Block>
            <Text style={styles.labelText}>OR</Text>
          </Block>

          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Block center style={styles.login}>
              <Text style={styles.loginText}>SIGNUP</Text>
            </Block>
          </TouchableOpacity>

          <Block style={{marginTop: 20,}}>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.labelText}>FORGOT PASSWORD?</Text>
            </TouchableOpacity>
          </Block>
        </Block>
    );
  }
}

const styles = StyleSheet.create({
  loginpage: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'white',
    paddingTop: windowHeight/7+100
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  labelText: {
    color: materialTheme.COLORS.LOGO_S,
    fontFamily: materialTheme.FONTS.SANCHEZ,
    fontSize: windowHeight > 812? 32 : 18
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
  login: {
    height: windowHeight*0.075,
    width: windowWidth-32 ,
    color: theme.COLORS.WHITE,
    backgroundColor: materialTheme.COLORS.LOGO_A,
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center'
  },
  loginText: {
    color: theme.COLORS.WHITE,
    fontFamily: materialTheme.FONTS.SANCHEZ,
    fontSize: windowHeight > 812? 32 : 18
  }
});
