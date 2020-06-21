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

import materialTheme from '../constants/Theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ForgotPassword extends React.Component {

  render() {
    const {navigation} = this.props;

    return (
        <Block style={styles.forgotPassword} flex center>
          <Text style={styles.labelText}>EMAIL ADDRESS / PHONE NUMBER:</Text>
          <TextInput style={styles.textInput} />

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Block center style={styles.submit}>
              <Text style={styles.loginText}>SUBMIT</Text>
            </Block>
          </TouchableOpacity>
        </Block>
    );
  }
}

const styles = StyleSheet.create({
  forgotPassword: {
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
  submit: {
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
