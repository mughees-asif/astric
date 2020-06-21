import React from 'react';
import {StyleSheet, Switch, FlatList, Platform, TouchableOpacity, ScrollView, Dimensions, Image, View} from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";

import materialTheme from '../constants/Theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const searchedPlaces = [
  {company: "Company1", id: "company1", catagory: "Mechanics", rating: 4.5},
  {company: "Company2", id: "company2", catagory: "Mechanics", rating: 3.5},
  {company: "Company3", id: "company3", catagory: "Mechanics", rating: 2.5},
  {company: "Company4", id: "company4", catagory: "Mechanics", rating: 1.5},
  {company: "Company5", id: "company5", catagory: "Mechanics", rating: 0.5},
]

export default class Search extends React.Component {
  renderItem = ({ item }) => {

    switch (true) {
      case (item.rating > 4):
        return (
            <Block row>
              <Image source={require('../assets/icons/happyface.png')} style={styles.faceImage}></Image>
              <Text style={styles.catagoryText}> EXCELLENT({item.rating})</Text>
            </Block>
        )
      case (item.rating > 3):
        return (
            <Block row>
              <Image source={require('../assets/icons/happyface.png')} style={styles.faceImage}></Image>
              <Text style={styles.catagoryText}> GOOD({item.rating})</Text>
            </Block>
        )

      case (item.rating >= 2):
        return (
            <Block row>
              <Image source={require('../assets/icons/mehface.png')} style={styles.faceImage}></Image>
              <Text style={styles.catagoryText}> AVERAGE({item.rating})</Text>
            </Block>
        )

      case (item.rating > 1):
        return (
            <Block row>
              <Image source={require('../assets/icons/sadface.png')} style={styles.faceImage}></Image>
              <Text style={styles.catagoryText}> POOR({item.rating})</Text>
            </Block>
        )

      default:
        return (
            <Block row>
              <Image source={require('../assets/icons/sadface.png')} style={styles.faceImage}></Image>
              <Text style={styles.catagoryText}> VERY POOR({item.rating})</Text>
            </Block>
        )

    }
  }

  render() {
    return (
        <Block style={styles.search} center>
          <Block style={{width: windowWidth, height: windowHeight*0.06, justifyContent: 'center', backgroundColor: materialTheme.COLORS.INPUT }} row center>
            <View style={{width: windowWidth*0.305, height: windowHeight*0.05, backgroundColor: theme.COLORS.WHITE, paddingTop: windowWidth*0.015, marginRight: windowWidth*0.02}}>
              <TouchableOpacity onPress={() => navgate('Pro')}>
                <Block style={{justifyContent: 'center', }} row>
                  <Image source={require('../assets/icons/filter.png')} style={styles.icon} />
                  <Text style={styles.topText}>FILTERS</Text>
                </Block>
              </TouchableOpacity>
            </View>
            <View style={{width: windowWidth*0.305, height: windowHeight*0.05, backgroundColor: theme.COLORS.WHITE, paddingTop: windowWidth*0.015,marginRight: windowWidth*0.02}}>
              <TouchableOpacity onPress={() => navgate('Pro')}>
                <Block style={{justifyContent: 'center', }} row>
                  <Image source={require('../assets/icons/sort.png')} style={styles.icon} />
                  <Text style={styles.topText}>SORT</Text>
                </Block>
              </TouchableOpacity>
            </View>
            <View style={{width: windowWidth*0.305, height: windowHeight*0.05, backgroundColor: theme.COLORS.WHITE, paddingTop: windowWidth*0.015,}}>
              <TouchableOpacity onPress={() => navgate('Pro')}>
              <Block style={{justifyContent: 'center', }} row>
                <Image source={require('../assets/icons/search.png')} style={styles.icon} />
                <Text style={styles.topText}>SEARCH</Text>
              </Block>
              </TouchableOpacity>
            </View>
          </Block>
          <Block center>
            <View>
              <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList
                  data={searchedPlaces}
                  keyExtractor={(item, index) => item.id}
                  renderItem={({item, index}) => (
                      <Block style={{borderBottomColor: materialTheme.COLORS.INPUT, borderBottomWidth: 2, paddingBottom: 10}}>
                        <TouchableOpacity onPress={() => navgate('Pro')}>
                          <Block row middle space="between" style={{paddingTop: 10}}>
                            <Block style={styles.leftContainer}>
                              <Image source={require('../assets/icons/companyPhoto.png')} style={styles.companyImage}></Image>
                            </Block>
                            <Block style={styles.rightContainer}>
                              <Text style={styles.companyText}>{item.company}</Text>
                              <Text style={styles.catagoryText}>{item.catagory}</Text>
                              {this.renderItem({item})}
                            </Block>
                          </Block>
                        </TouchableOpacity>
                      </Block>
                  )}
                  />
                </ScrollView>
            </View>
          </Block>
        </Block>

    );
  }
}

const styles = StyleSheet.create({
  search: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'white',
    paddingTop: 100,
    position: 'relative',
    zIndex: 2,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  sampleText: {
    paddingTop: theme.SIZES.BASE * 6.75,
  },
  leftContainer: {
    width: (windowWidth-32)*0.35,
  },
  rightContainer: {
    width: (windowWidth-32)*0.65
  },
  accountNameText: {
    textAlign: 'center',
    fontFamily: materialTheme.FONTS.LEAGUESPARTANBOLD,
    color: materialTheme.COLORS.LOGO_A,
    fontSize: windowHeight > 812 ? 40 : 28,
  },
  editAccountText: {
    textAlign: 'center',
    color: materialTheme.COLORS.LOGO_S,
    fontSize: windowHeight > 812 ? 22 : 16,
    fontFamily: materialTheme.FONTS.SANCHEZ
  },
  topText: {
    textAlign: 'center',
    color: materialTheme.COLORS.LOGO_A,
    fontSize: windowHeight > 812 ? 20 : 14,
    fontFamily: materialTheme.FONTS.SANCHEZ,
    marginTop: 3
  },
  companyText:{
    color: materialTheme.COLORS.LOGO_A,
    fontFamily: materialTheme.FONTS.LEAGUESPARTANBOLD,
    fontSize: windowHeight > 812 ? 36 : 20,
  },
  catagoryText:{
    color: materialTheme.COLORS.LOGO_I,
    fontSize: windowHeight > 812 ? 22 : 16,
    fontFamily: materialTheme.FONTS.SANCHEZ
  },
  faceImage:{
    height: windowHeight > 812 ? 30 : 18,
    width: windowHeight > 812 ? 30 : 18,
  },
  companyImage:{
    height: windowHeight > 812 ? 180 : 100,
    width: windowHeight > 812 ? 180 : 100,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 5
  },
});
