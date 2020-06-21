import React from 'react';
import {StyleSheet, Switch, FlatList, Platform, TouchableOpacity, ScrollView, Dimensions} from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";

import materialTheme from '../constants/Theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Friends extends React.Component {

  render() {
    return (
        <Block style={styles.friends} flex center>
          <Text style={styles.sampleText}> Just some sample text for the Friends page.</Text>
        </Block>
    );
  }
}

const styles = StyleSheet.create({
  friends: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'white',
    paddingTop: 20
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  sampleText: {
    paddingTop: theme.SIZES.BASE * 6.75,
  }
});
