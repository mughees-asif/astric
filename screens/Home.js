import React from 'react';
import { Image, StyleSheet, Dimensions, TextInput } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
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
    const { navigation } = this.props;
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
          value={ this.props.searchName }
          keyboardType="default"
          returnKeyType="search"
          onSubmitEditing={a => navigation.navigate('Search') }

        />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: windowWidth,
    backgroundColor: 'white',
    paddingTop: windowHeight/5+100
  },
  logo: {
    width: windowWidth - 32,
    height: windowHeight > 812 ? 250 : 120, //ipad 18, iphone 11, samsung 13 need to find a better way to resize the image
    resizeMode: 'contain',
    marginHorizontal: 16,
  },
  searchText: {
    color: materialTheme.COLORS.LOGO_A,
    fontWeight: 'bold',
    marginHorizontal: 16,
    fontSize: 20,
    fontFamily: materialTheme.FONTS.LEAGUESPARTANBOLD
  },
  search: {
    height: 48,
    width: windowWidth - 32,
    color: theme.COLORS.BLACK,
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: materialTheme.FONTS.LEAGUESPARTANBOLD,
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
    width: windowWidth * 0.50,
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
  }
});
