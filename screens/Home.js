import React from 'react';
import { Image, StyleSheet, Dimensions, ScrollView, TextInput } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { Icon, Product } from '../components/';

const { width } = Dimensions.get('screen');
import products from '../constants/products';
import {materialTheme} from "../constants";

export default class Home extends React.Component {
  
  renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex style={styles.home}>
        <Image 
          style={ styles.logo }
          source={require('../assets/images/zoom.png')}/>
        <Text style={ styles.searchText }>
          What Service do you require?
        </Text>
        <TextInput
          placeholderTextColor='#000000'
          style={styles.search}
          placeholder="Type here..."
        />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
    backgroundColor: 'white',
    paddingVertical: 200
  },
  logo: {
    width: width - 32,
    height: 100,
    marginHorizontal: 16,
    borderRadius: 3,
    marginBottom: 15
  },
  searchText: {
    color: materialTheme.COLORS.LOGO_A,
    fontWeight: 'bold',
    marginHorizontal: 16,
    fontSize: 20,
    fontFamily: "leaguespartan-bold"
  },
  search: {
    height: 48,
    width: width - 32,
    color: theme.COLORS.BLACK,
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: "leaguespartan-bold",
    backgroundColor: '#af62Cf',
    marginHorizontal: 16,
    borderRadius: 10,
    padding: 10
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});
