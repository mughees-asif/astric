import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions, View, FlatList
} from 'react-native';
import {Button, Block, Text, Input, theme, Icon} from 'galio-framework';
import materialTheme from "../constants/Theme";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const links = [
  {title: "FAQ", id: "faq"},
  {title: "Contact Us", id: "contact"},
  {title: "Privacy Policy", id: "privacy"},
  {title: "Terms of use", id: "terms"},
  {title: "Instagram", id: "instagram"},
];

export default class AboutApp extends React.Component {
  render() {
    return (
      <View style={styles.aboutapp} center >
        <View style={{ backgroundColor: materialTheme.COLORS.INPUT, paddingTop: 7 }}>
          <FlatList
              data={links}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                  <Block style={styles.rows}>
                    <TouchableOpacity onPress={() => navigate('Pro')}>
                      <Block row middle space="between" style={{paddingTop: 7, paddingBottom: 3}}>
                        <View style={styles.leftContainer}>
                          <Text size={20} style={{color: materialTheme.COLORS.LOGO_A,fontFamily: materialTheme.FONTS.LEAGUESPARTANBOLD, paddingHorizontal: 15 }}>{item.title}</Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Icon name="angle-right" styles={{fontWeight: 'bold', fontSize: 24, color: materialTheme.COLORS.LOGO_S}}
                                family="font-awesome" style={{paddingRight: 5}}/>
                        </View>
                      </Block>
                    </TouchableOpacity>
                  </Block>
              )}
          />
        </View>
        <Block center style={{ paddingTop: 20, width: windowWidth }}>
          <Text size={10} style={{color: materialTheme.COLORS.LOGO_I, fontFamily: materialTheme.FONTS.SANCHEZ }}>VERSION 1.0</Text>
        </Block>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  aboutapp: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'white',
    paddingTop: 100,
    borderColor: 'black',
    // border: ''
  },
  title: {
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
  },
  group: {
    paddingTop: theme.SIZES.BASE * 3.75,
  },
  leftContainer: {
    justifyContent: 'flex-start',
    width: windowWidth*0.85,
  },
  rightContainer: {
    justifyContent: 'flex-end',
    width: windowWidth,
  },
  rows: {
    height: theme.SIZES.BASE * 2.25,
    paddingHorizontal: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE / 2,
    backgroundColor: 'white'
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
