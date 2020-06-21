import React from 'react';
import {
  StyleSheet,
  Switch,
  FlatList,
  Platform,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  View,
  TextInput, Image
} from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";
import RNPickerSelect from 'react-native-picker-select';

import materialTheme from '../constants/Theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class BusinessAccount extends React.Component {

  render() {
    return (
        <Block style={styles.businessaccount} flex center>

          <Block row style={{width: windowWidth}}>
            <View style={styles.leftContainer}>
              <Text style={styles.labelText}>BUSINESS NAME:*</Text>
              <TextInput style={styles.textInput} />
            </View>
          </Block>

          <Block row style={{width: windowWidth}}>
            <View style={styles.leftContainer}>
              <Text style={styles.labelText}>BUSINESS EMAIL ADDRESS:*</Text>
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
              <Text style={styles.labelText}>CATAGORY:*</Text>
              <View style={styles.textInput}>
                <RNPickerSelect
                    placeholder='PLEASE SELECT ONE'
                    onValueChange={(value) => console.log(value)}
                    items={[
                      { label: 'Catagory1', value: 'cat1' },
                      { label: 'Catagory2', value: 'cat2' },
                      { label: 'Catagory3', value: 'cat3' },
                    ]}
                />
              </View>
            </View>
          </Block>

          <Block row style={{width: windowWidth}}>
            <View style={styles.leftContainer}>
              <Text style={styles.labelText}>NUMBER OF EMPLOYEES:*</Text>
              <TextInput style={styles.textInput} />
            </View>
          </Block>

          <Block row style={{width: windowWidth}}>
            <View style={styles.leftContainer}>
              <Text style={styles.labelText}>ADDRESS:*</Text>
              <TextInput placeholder={'ADDRESS LINE 1'} style={styles.textInput} />
              <TextInput placeholder={'ADDRESS LINE 2'} style={styles.textInput} />
              <TextInput placeholder={'CITY'} style={styles.textInput} />
            </View>
          </Block>
          <Block row style={{width: windowWidth}}>
            <View style={styles.leftContainer}>
              <TextInput placeholder={'COUNTRY'} style={styles.textInputHalf} />
            </View>
            <View style={styles.rightContainer}>
              <TextInput placeholder={'ZIPCODE'} style={styles.textInputHalf} />
            </View>
          </Block>

          <Block row style={{width: windowWidth}}>
            <View style={styles.leftContainer}>
              <Text style={styles.labelText}>SELECT A BUSINESS CARD</Text>
            </View>
          </Block>

        </Block>
    );
  }
}

const styles = StyleSheet.create({
  businessaccount: {
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
    marginBottom: 10,
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
});
