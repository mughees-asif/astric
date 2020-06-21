import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import {StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View, TextInput, TouchableOpacity} from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import materialTheme from '../constants/Theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ProfileInfo extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
        <Block style={styles.profileInfo} flex center>

          <Block row style={{width: windowWidth}}>
            <View style={styles.leftContainer}>
              <Text style={styles.labelText}>FIRST NAME:*</Text>
              <TextInput style={styles.textInputHalf} />
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.labelText}>SURNAME:*</Text>
              <TextInput style={styles.textInputHalf} />
            </View>
          </Block>

          <Block row style={{width: windowWidth}}>
            <View style={styles.leftContainer}>
              <Text style={styles.labelText}>EMAIL ADDRESS:*</Text>
              <TextInput style={styles.textInput} />
            </View>
          </Block>


          <Block row style={{width: windowWidth}}>
            <View style={styles.leftContainer}>
              <Text style={styles.labelText}>PASSWORD:* <Text style={{fontSize:windowHeight > 812 ? 16 : 10, color: materialTheme.COLORS.PLACEHOLDER}} >(MINIMUM 8 CHARACTERS)</Text></Text>
              <TextInput style={styles.textInput} />
            </View>
          </Block>


          <Block row style={{width: windowWidth}}>
            <View style={styles.leftContainer}>
              <Text style={styles.labelText}>CONFIRM PASSWORD:*</Text>
              <TextInput style={styles.textInput} />
            </View>
          </Block>


          <Block row style={{width: windowWidth}}>
            <View style={styles.leftContainer}>
              <Text style={styles.labelText}>PHONE NUMBER:*</Text>
              <TextInput style={styles.textInput} />
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

        </Block>
    );
  }
}

// export default withNavigation(Product);

const styles = StyleSheet.create({
  profileInfo: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'white',
    paddingTop: 100
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